"use client";
import { useEffect, useRef } from "react";

const NUTRIENTS = [
  { label: "Protein",           value: "27g",   color: "bg-success",   pct: 27,  delay: 50  },
  { label: "Serat Pangan",      value: "3.4g",  color: "bg-info",      pct: 12,  delay: 100 },
  { label: "Karbohidrat",       value: "5.1g",  color: "bg-warning",   pct: 18,  delay: 150 },
  { label: "Lemak Total",       value: "0.3g",  color: "bg-success",   pct: 3,   delay: 200 },
  { label: "Vitamin B-kompleks",value: "Tinggi",color: "bg-purple-400", pct: 82, delay: 250 },
  { label: "Beta-Glukan",       value: "Aktif", color: "bg-error",     pct: 70,  delay: 300 },
];

const LABEL_COLORS: Record<string, string> = {
  "bg-success":    "text-success",
  "bg-info":       "text-info",
  "bg-warning":    "text-warning",
  "bg-purple-400": "text-purple-400",
  "bg-error":      "text-error",
};

function NutrientBar({ label, value, color, pct, delay }: typeof NUTRIENTS[0]) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.width = "0%";
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              bar.style.width = pct + "%";
            }, delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(bar);
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{label}</span>
        <span className={`font-bold ${LABEL_COLORS[color]}`}>{value}</span>
      </div>
      <div className="h-2 bg-base-300 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full ${color} rounded-full transition-[width] duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Nutrition() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">
            Kandungan Nutrisi per 100g
          </div>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Superfood <span className="text-success">Alami</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NUTRIENTS.map((n) => (
            <NutrientBar key={n.label} {...n} />
          ))}
        </div>

        <p className="text-center mt-8 text-xs opacity-40">
          *Nilai berdasarkan analisis laboratorium. Angka dalam % adalah persentase dari kebutuhan harian dewasa.
        </p>
      </div>
    </section>
  );
}
