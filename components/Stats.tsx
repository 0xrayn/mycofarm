"use client";
import { useEffect, useRef } from "react";

const STATS = [
  { target: 500, suffix: " kg", label: "Produksi / Bulan", icon: "🍄" },
  { target: 250, suffix: "+", label: "Pelanggan Aktif", icon: "👥" },
  { target: 98, suffix: "%", label: "Kepuasan Pelanggan", icon: "⭐" },
  { target: 5, suffix: " thn", label: "Pengalaman", icon: "🏆" },
];

function useCountUp(ref: React.RefObject<HTMLElement | null>, target: number, suffix: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !(el as any).dataset.done) {
          (el as any).dataset.done = "1";
          let cur = 0, start: number | null = null;
          const dur = 1600;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            cur = Math.round(target * ease);
            el.textContent = cur + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);
}

function StatCard({ target, suffix, label, icon }: typeof STATS[0]) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCountUp(numRef, target, suffix);

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 text-center hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="font-black leading-none mb-2 text-base-content" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem" }}>
        <span ref={numRef}>0{suffix}</span>
      </div>
      <div className="text-sm opacity-50">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
