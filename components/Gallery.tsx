"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const STATIC_GALLERY = [
  { id: "s1", src: "/images/atas.png",          label: "🍄 Jamur Tiram Segar Panen Pagi", sub: "Dipetik langsung dari kumbung organik kami", cls: "col-span-12 lg:col-span-7", h: "h-72 lg:h-[420px]" },
  { id: "s2", src: "/images/atas2.png",         label: "🏡 Kumbung Jamur",               sub: "Kapasitas 10.000 baglog",                   cls: "col-span-12 lg:col-span-5", h: "h-48 lg:h-[420px]" },
  { id: "s3", src: "/images/baglog.png",        label: "🌿 Proses Inkubasi",             sub: "Suhu & kelembaban terkontrol",              cls: "col-span-12 lg:col-span-4", h: "h-56" },
  { id: "s4", src: "/images/baglogfresh.png",   label: "🌾 Baglog Produktif",            sub: "Media tanam premium berkualitas",           cls: "col-span-12 lg:col-span-4", h: "h-56" },
  { id: "s5", src: "/images/atas4.png",         label: "🌈 Varietas Tiram",              sub: "Putih, Kuning, Pink",                       cls: "col-span-12 lg:col-span-4", h: "h-56" },
  { id: "s6", src: "/images/staterpack.png",    label: "📦 Packaging Higienis",          sub: "Segar sampai tujuan",                       cls: "col-span-12 lg:col-span-3", h: "h-52" },
  { id: "s7", src: "/images/atas5.png",         label: "⚗️ Sterilisasi Baglog",          sub: "Standar HACCP",                             cls: "col-span-12 lg:col-span-5", h: "h-52" },
  { id: "s8", src: "/images/jamurtiramputih.png", label: "🔍 Tekstur Premium",           sub: "Detail kualitas grade A",                   cls: "col-span-12 lg:col-span-4", h: "h-52" },
  { id: "s9", src: "/images/atas6.png",         label: "📦 Paket Siap Kirim",            sub: "Pengiriman ke seluruh Jawa Timur",          cls: "col-span-12 lg:col-span-6", h: "h-56" },
  { id: "s10", src: "/images/keripikjamur.png", label: "🍳 Olahan Lezat",               sub: "Kaya nutrisi, rendah kalori",               cls: "col-span-12 lg:col-span-6", h: "h-56" },
];

interface GalleryItem { id: string; src: string; label: string; sub: string; cls?: string; h?: string; }

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.label} className="w-full object-contain max-h-[78vh]" />
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-bold text-lg">{item.label}</p>
          {item.sub && <p className="text-white/70 text-sm">{item.sub}</p>}
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors">✕</button>
      </div>
    </div>
  );
}

function UploadModal({ onClose, onUploaded }: { onClose: () => void; onUploaded: (item: GalleryItem) => void }) {
  const [step, setStep] = useState<"password" | "upload">("password");
  const [password, setPassword] = useState("");
  const [label, setLabel] = useState("");
  const [sub, setSub] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File | null) => {
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
    else setPreview(null);
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { setStep("upload"); setError(""); }
  };

  const handlePasswordContinue = () => {
    if (!password.trim()) { setError("Masukkan password terlebih dahulu"); return; }
    setStep("upload");
    setError("");
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview); };
  }, [preview]);

  const handleUpload = async () => {
    if (!file) { setError("Pilih foto terlebih dahulu"); return; }
    if (!label.trim()) { setError("Masukkan judul foto"); return; }
    setLoading(true); setError("");
    const fd = new FormData();
    fd.append("password", password);
    fd.append("file", file);
    fd.append("label", label);
    fd.append("sub", sub);
    try {
      const res = await fetch("/api/gallery", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload gagal");
      setSuccess("Foto berhasil diupload! 🎉");
      onUploaded(data.item);
      setTimeout(onClose, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan";
      if (msg.toLowerCase().includes("password")) setStep("password");
      setError(msg);
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[998] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-base-200 border border-white/10 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <h2 className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {step === "password" ? "🔐 Akses Admin Galeri" : "📸 Upload Foto"}
            </h2>
            <p className="text-xs opacity-50 mt-0.5">{step === "password" ? "Masukkan password untuk melanjutkan" : "Pilih foto dari perangkat Anda"}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-sm">✕</button>
        </div>
        <div className="p-6 space-y-4">
          {step === "password" ? (
            <>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest opacity-50 mb-2">Password Admin</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handlePasswordKeyDown} placeholder="Masukkan password..." autoFocus
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500/60 transition-colors" />
              </div>
              {error && <div className="text-red-400 text-sm bg-red-500/10 rounded-xl px-4 py-3">{error}</div>}
              <button onClick={handlePasswordContinue}
                className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 rounded-xl transition-all">
                Lanjutkan →
              </button>
            </>
          ) : (
            <>
              <div onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }} onDragOver={(e) => e.preventDefault()}
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-white/20 hover:border-green-500/50 rounded-2xl p-6 text-center cursor-pointer transition-colors">
                {preview
                  ? <img src={preview} alt="preview" className="w-full h-44 object-cover rounded-xl" />
                  : <div className="space-y-2"><div className="text-3xl">🖼️</div><p className="text-sm opacity-60">Drag & drop atau <span className="text-green-400">klik pilih foto</span></p><p className="text-xs opacity-40">JPG, PNG, WebP · Maks. 5MB</p></div>
                }
                <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => handleFile(e.target.files?.[0] || null)} />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest opacity-50 mb-2">Judul Foto *</label>
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="cth: 🍄 Panen Pagi Hari"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500/60 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest opacity-50 mb-2">Keterangan (opsional)</label>
                <input type="text" value={sub} onChange={(e) => setSub(e.target.value)} placeholder="cth: Dipetik langsung dari kumbung"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500/60 transition-colors" />
              </div>
              {error && <div className="text-red-400 text-sm bg-red-500/10 rounded-xl px-4 py-3">{error}</div>}
              {success && <div className="text-green-400 text-sm bg-green-500/10 rounded-xl px-4 py-3">{success}</div>}
              <button onClick={handleUpload} disabled={loading}
                className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Mengupload...</> : "Upload Foto"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ item, cls, h, onOpen }: { item: GalleryItem; cls: string; h: string; onOpen: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={`relative rounded-3xl overflow-hidden cursor-pointer group ${cls} ${h}`} onClick={onOpen}>
      {imgError ? (
        <div className="w-full h-full bg-base-200 flex flex-col items-center justify-center gap-2 text-base-content/40">
          <span className="text-4xl">🍄</span><span className="text-xs font-medium">{item.label}</span>
        </div>
      ) : (
        <img src={item.src} alt={item.label} className="w-full h-full object-cover block group-hover:scale-[1.06] transition-transform duration-700 will-change-transform" loading="lazy" onError={() => setImgError(true)} />
      )}
      {!imgError && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-bold text-base block drop-shadow">{item.label}</span>
            {item.sub && <span className="text-white/75 text-xs block">{item.sub}</span>}
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
          </div>
        </>
      )}
    </div>
  );
}

export default function Gallery() {
  const [uploadedItems, setUploadedItems] = useState<GalleryItem[]>([]);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((data) => { if (mounted) setUploadedItems(data.items || []); })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);

  const handleUploaded = useCallback((item: GalleryItem) => {
    setUploadedItems((prev) => [item, ...prev]);
  }, []);

  const uploadedWithLayout = uploadedItems.map((item) => ({
    ...item,
    cls: "col-span-12 sm:col-span-6 lg:col-span-4",
    h: "h-56",
  }));

  return (
    <section id="galeri" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">Galeri Kebun</div>
            <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Lihat Sendiri <span className="text-success">Kualitasnya</span>
            </h2>
            <p className="mt-4 opacity-60 max-w-lg">Dokumentasi nyata dari kebun kami — transparan dan apa adanya.</p>
          </div>
          <button onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/10 hover:border-green-500/40 transition-all text-sm font-medium flex-shrink-0">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
            Upload Foto
          </button>
        </div>

        {/* Foto yang diupload admin — grid seragam 3 kolom */}
        {uploadedItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {uploadedWithLayout.map((item) => (
              <GalleryCard key={item.id} item={item} cls="" h="h-56" onOpen={() => setLightboxItem(item)} />
            ))}
          </div>
        )}

        {/* Foto default — grid masonry dengan ukuran bervariasi */}
        <div className="grid grid-cols-12 gap-4">
          {STATIC_GALLERY.map((item) => (
            <GalleryCard key={item.id} item={item} cls={item.cls || "col-span-12 lg:col-span-4"} h={item.h || "h-56"} onOpen={() => setLightboxItem(item)} />
          ))}
        </div>

        {uploadedItems.length > 0 && (
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-xs opacity-50 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {uploadedItems.length} foto dari admin · {STATIC_GALLERY.length} foto default
            </span>
          </div>
        )}
      </div>

      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} onUploaded={handleUploaded} />}
    </section>
  );
}
