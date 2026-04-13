"use client";
import { useEffect, useRef } from "react";

const WA_NUM = "6281234567890";

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let cancelled = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      const THREE = await import("three");
      if (cancelled || !mount) return;

      const canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;outline:none;border:none;display:block";
      mount.appendChild(canvas);

      const W = mount.clientWidth || window.innerWidth;
      const H = mount.clientHeight || window.innerHeight;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
      } catch { canvas.remove(); return; }

      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
      camera.position.set(0, 0, 6);

      const isMobile = W < 768;
      const pCount = isMobile ? 80 : 280;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 22;
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.06, color: 0x4ade80, transparent: true, opacity: 0.55 });
      scene.add(new THREE.Points(pGeo, pMat));

      const allGeos: InstanceType<typeof THREE.BufferGeometry>[] = [pGeo];
      const allMats: InstanceType<typeof THREE.Material>[] = [pMat];
      const shapes: { mesh: InstanceType<typeof THREE.Mesh>; rx: number; ry: number }[] = [];

      const shapeConfigs = isMobile
        ? [{ G: new THREE.IcosahedronGeometry(0.5, 0), c: 0x4ade80 }]
        : [
            { G: new THREE.TorusGeometry(0.7, 0.04, 10, 32), c: 0x22c55e },
            { G: new THREE.TorusGeometry(1.1, 0.03, 8, 48),  c: 0x4ade80 },
            { G: new THREE.IcosahedronGeometry(0.5, 0),       c: 0x86efac },
            { G: new THREE.OctahedronGeometry(0.45, 0),       c: 0x16a34a },
            { G: new THREE.TorusKnotGeometry(0.35, 0.08, 64, 8), c: 0xa3e635 },
          ];

      shapeConfigs.forEach(({ G, c }, i) => {
        const mat = new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.18 + i * 0.04 });
        const mesh = new THREE.Mesh(G, mat);
        mesh.position.set((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        shapes.push({ mesh, rx: 0.003 + Math.random() * 0.005, ry: 0.002 + Math.random() * 0.004 });
        scene.add(mesh);
        allGeos.push(G); allMats.push(mat);
      });

      let bigTorus: InstanceType<typeof THREE.Mesh> | null = null;
      if (!isMobile) {
        const bGeo = new THREE.TorusGeometry(3, 0.018, 6, 100);
        const bMat = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.05 });
        allGeos.push(bGeo); allMats.push(bMat);
        bigTorus = new THREE.Mesh(bGeo, bMat);
        bigTorus.rotation.x = Math.PI / 4;
        scene.add(bigTorus);
      }

      let mx2 = 0, my2 = 0;
      const onMove = (e: MouseEvent) => { mx2 = e.clientX / window.innerWidth - 0.5; my2 = e.clientY / window.innerHeight - 0.5; };
      if (!isMobile) document.addEventListener("mousemove", onMove);

      let paused = false;
      const onVis = () => { paused = document.hidden; if (!paused) tick(); };
      document.addEventListener("visibilitychange", onVis);

      let rafId: number, t = 0;
      const tick = () => {
        if (paused || cancelled) return;
        rafId = requestAnimationFrame(tick);
        t += 0.008;
        if (!isMobile) {
          camera.position.x += (mx2 * 0.8 - camera.position.x) * 0.04;
          camera.position.y += (-my2 * 0.5 - camera.position.y) * 0.04;
          camera.lookAt(scene.position);
        }
        if (bigTorus) bigTorus.rotation.z += 0.002;
        shapes.forEach((s) => { s.mesh.rotation.x += s.rx; s.mesh.rotation.y += s.ry; s.mesh.position.y += Math.sin(t + s.mesh.position.x) * 0.006; });
        renderer.render(scene, camera);
      };
      tick();

      const onResize = () => {
        const w = mount.clientWidth || window.innerWidth, h = mount.clientHeight || window.innerHeight;
        camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("resize", onResize);
        allGeos.forEach((g) => g.dispose());
        allMats.forEach((m) => m.dispose());
        renderer.dispose(); renderer.forceContextLoss(); canvas.remove();
      };
    })();

    return () => { cancelled = true; cleanup?.(); };
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen overflow-hidden flex items-center bg-[#0a1a0f]">
      <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-green-500/20 blur-[80px] pointer-events-none" style={{ animation: "morphBlob 10s ease-in-out infinite" }} />
      <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-emerald-700/15 blur-[80px] pointer-events-none" style={{ animation: "morphBlob 14s 3s ease-in-out infinite" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16 lg:pt-20 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">

        {/* ── MOBILE layout: single column, image between heading & buttons ── */}
        <div className="flex flex-col gap-5 w-full lg:hidden">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-green-400/30 bg-green-400/10 text-green-400 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Panen Segar Setiap Pagi
          </div>

          {/* Heading */}
          <h1 className="text-[2.8rem] sm:text-6xl font-black leading-[1] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Jamur Tiram <span className="shimmer-text">Premium</span>
          </h1>

          {/* Image — right after heading */}
          <div className="relative w-full h-48 sm:h-60 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="/images/atas.png"
              alt="Jamur Tiram Segar"
              className="w-full h-full object-cover block"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>

          {/* Desc */}
          <p className="text-white/60 text-sm leading-relaxed">
            Dari kebun organik kami di dataran tinggi Malang — jamur tiram segar berkualitas
            restoran bintang lima, langsung ke tangan Anda.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!%20Saya%20ingin%20memesan%20jamur%20tiram%20segar.`}
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all text-sm"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Pesan via WhatsApp
            </a>
            <a
              href="#produk"
              onClick={(e) => { e.preventDefault(); document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center justify-center gap-2 text-white/80 border border-white/20 px-6 py-3.5 rounded-2xl font-medium text-sm"
            >
              Lihat Produk
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 pb-2">
            {["100% Organik", "PIRT Terdaftar", "Gratis Ongkir Malang"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-white/50 text-xs">
                <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout: 2-column grid ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div style={{ animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-green-400/30 bg-green-400/10 text-green-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Panen Segar Setiap Pagi
            </div>
            <h1 className="text-7xl xl:text-8xl font-black leading-[0.9] mb-6 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Jamur<br /><span className="shimmer-text">Tiram</span><br /><span className="text-white/90">Premium</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-10">
              Dari kebun organik kami di dataran tinggi Malang — jamur tiram segar berkualitas restoran bintang lima, langsung ke tangan Anda.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`https://wa.me/${WA_NUM}?text=Halo%20MycoFarm!%20Saya%20ingin%20memesan%20jamur%20tiram%20segar.`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Pesan via WhatsApp
              </a>
              <a href="#produk" onClick={(e) => { e.preventDefault(); document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-2xl transition-all font-medium">
                Lihat Produk
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {["100% Organik", "PIRT Terdaftar", "Gratis Ongkir Malang"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/50 text-sm">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — desktop image with floating cards */}
          <div className="relative" style={{ animation: "fadeUp 1s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}>
            <div className="relative w-full max-w-md ml-auto">
              <div className="w-full h-[480px] xl:h-[520px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 relative" style={{ animation: "floatY 5s ease-in-out infinite" }}>
                <img src="/images/atas.png" alt="Jamur Tiram Segar" className="w-full h-full object-cover block" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>
              <div className="absolute -left-12 bottom-16 bg-black/70 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-xl" style={{ animation: "floatY 5s 1s ease-in-out infinite" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">🌿</div>
                  <div>
                    <div className="text-white font-semibold text-sm">500 kg/bulan</div>
                    <div className="text-white/50 text-xs">Kapasitas produksi</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 top-16 bg-green-500 text-white rounded-2xl p-4 shadow-xl shadow-green-500/30" style={{ animation: "floatX 4s 0.5s ease-in-out infinite" }}>
                <div className="text-2xl font-black" style={{ fontFamily: "'Cormorant Garamond', serif" }}>98%</div>
                <div className="text-xs font-medium opacity-80">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 text-white pointer-events-none">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-current" style={{ animation: "fadeIn 1s 0.5s both" }} />
        <span className="text-[0.6rem] tracking-[0.15em] uppercase" style={{ writingMode: "vertical-lr" }}>scroll</span>
      </div>
    </section>
  );
}
