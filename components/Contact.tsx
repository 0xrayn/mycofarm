"use client";
import { useState } from "react";

const WA_NUM = "6281234567890";

const PRODUCTS = [
  "Jamur Tiram Putih Segar (Rp 15.000/kg)",
  "Jamur Tiram Kuning Premium (Rp 25.000/kg)",
  "Jamur Tiram Pink Langka (Rp 35.000/kg)",
  "Baglog Siap Panen (Rp 7.500/pcs)",
  "Baglog Fresh (Rp 5.000/pcs)",
  "Starter Kit Lengkap (Rp 350.000/paket)",
  "Keripik Jamur (Rp 25.000/200g)",
  "Abon Jamur (Rp 35.000/150g)",
  "Nugget Jamur (Rp 30.000/250g)",
];

const QUICK_ORDERS = [
  { label: "🍄 Jamur Tiram Segar", text: "Halo!%20Mau%20pesan%20Jamur%20Tiram%20Segar." },
  { label: "🌾 Pesan Baglog", text: "Halo!%20Mau%20pesan%20Baglog." },
  { label: "🤝 Program Kemitraan", text: "Halo!%20Mau%20tanya%20tentang%20program%20kemitraan." },
  { label: "🌿 Konsultasi Budidaya", text: "Halo!%20Mau%20konsultasi%20budidaya%20jamur." },
];

const inputCls = "w-full bg-base-200 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-success/50 transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", product: "", qty: "", phone: "", address: "", notes: "" });

  const sendOrder = () => {
    const { name, product, qty, address, phone, notes } = form;
    if (!name || !product || !qty || !address) {
      alert("Mohon lengkapi semua field yang wajib (*)");
      return;
    }
    let msg = `🍄 *PESANAN — MycoFarm*\n\n👤 *Nama:* ${name}\n🛒 *Produk:* ${product}\n📦 *Jumlah:* ${qty}\n📍 *Alamat:* ${address}`;
    if (phone) msg += `\n📱 *WA:* ${phone}`;
    if (notes) msg += `\n📝 *Catatan:* ${notes}`;
    msg += `\n\n_Dikirim dari mycofarm.id_`;
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="kontak" className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold opacity-60 mb-3">Hubungi Kami</div>
          <h2 className="text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Siap Pesan? <span className="text-success">Kami Siap!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Order form */}
          <div className="lg:col-span-3 bg-base-100 rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-bold mb-6">Buat Pesanan via WhatsApp</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Nama Lengkap *</label>
                <input value={form.name} onChange={set("name")} placeholder="Nama Anda" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Produk yang Dipesan *</label>
                <select value={form.product} onChange={set("product")} className={inputCls}>
                  <option value="" disabled>Pilih produk...</option>
                  {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">Jumlah *</label>
                  <input value={form.qty} onChange={set("qty")} placeholder="Cth: 5 kg / 50 pcs" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">No. WhatsApp</label>
                  <input value={form.phone} onChange={set("phone")} placeholder="+62..." className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Alamat Pengiriman *</label>
                <textarea value={form.address} onChange={set("address")} placeholder="Alamat lengkap termasuk RT/RW, Kelurahan, Kecamatan..." className={`${inputCls} resize-none h-24`} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Catatan (Opsional)</label>
                <textarea value={form.notes} onChange={set("notes")} placeholder="Waktu pengiriman, permintaan khusus, dll..." className={`${inputCls} resize-none h-16`} />
              </div>
              <button
                onClick={sendOrder}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/30 text-base"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Kirim Pesanan via WhatsApp
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Quick orders */}
            <div className="bg-success text-success-content rounded-3xl p-6">
              <h4 className="font-bold text-lg mb-4">Pesan Cepat</h4>
              <div className="space-y-2.5">
                {QUICK_ORDERS.map((o) => (
                  <a key={o.label} href={`https://wa.me/${WA_NUM}?text=${o.text}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-xl px-4 py-3 transition-all text-sm font-medium">
                    {o.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-base-100 rounded-3xl p-6 border border-white/5">
              <h4 className="font-bold mb-5">Informasi Kontak</h4>
              <div className="space-y-4 text-sm">
                {[
                  { icon: "📱", label: "WhatsApp", val: "+62 812-3456-7890", bg: "bg-success/15" },
                  { icon: "📍", label: "Lokasi", val: "Jl. Sumber Sari No. 88, Lowokwaru, Malang 65145", bg: "bg-blue-500/15" },
                  { icon: "⏰", label: "Jam Buka", val: "Sen–Sab: 06.00–17.00 · Min: 06.00–12.00", bg: "bg-yellow-500/15" },
                  { icon: "📧", label: "Email", val: "hello@mycofarm.id", bg: "bg-purple-500/15" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3">
                    <div className={`w-9 h-9 ${c.bg} rounded-xl flex items-center justify-center text-base flex-shrink-0`}>{c.icon}</div>
                    <div>
                      <div className="font-medium text-xs opacity-50 mb-0.5">{c.label}</div>
                      <div className="opacity-80">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery areas */}
            <div className="bg-base-100 rounded-3xl p-5 border border-white/5">
              <div className="text-xs opacity-40 mb-3 font-medium uppercase tracking-wider">Area Pengiriman Gratis</div>
              <div className="flex flex-wrap gap-2">
                {["Malang Kota", "Malang Kab.", "Batu"].map((a) => (
                  <span key={a} className="text-xs bg-success/15 text-success px-3 py-1 rounded-full font-semibold">{a}</span>
                ))}
                {["Blitar +ongkir", "Surabaya +ongkir"].map((a) => (
                  <span key={a} className="text-xs bg-base-200 px-3 py-1 rounded-full opacity-60">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
