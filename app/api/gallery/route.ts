import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

// Password untuk upload — ganti sesuai kebutuhan
const UPLOAD_PASSWORD = process.env.GALLERY_PASSWORD || "mycofarm2024";

// File storage untuk menyimpan metadata foto
const DATA_FILE = path.join(process.cwd(), "public", "gallery-data.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "gallery");

interface GalleryItem {
  id: string;
  src: string;
  label: string;
  sub: string;
  uploadedAt: string;
}

async function readGalleryData(): Promise<GalleryItem[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeGalleryData(data: GalleryItem[]) {
  await writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET — ambil semua foto galeri
export async function GET() {
  const items = await readGalleryData();
  return NextResponse.json({ items });
}

// POST — upload foto baru (requires password)
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const password = formData.get("password") as string;
    const file = formData.get("file") as File | null;
    const label = (formData.get("label") as string) || "Foto Galeri";
    const sub = (formData.get("sub") as string) || "";

    // Cek password
    if (password !== UPLOAD_PASSWORD) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    // Validasi tipe file
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: "Tipe file tidak didukung. Gunakan JPG, PNG, atau WebP." }, { status: 400 });
    }

    // Validasi ukuran (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Ukuran file terlalu besar. Maksimal 5MB." }, { status: 400 });
    }

    // Buat direktori upload jika belum ada
    await mkdir(UPLOAD_DIR, { recursive: true });

    // Simpan file
    const ext = file.name.split(".").pop() || "jpg";
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const filename = `${id}.${ext}`;
    const filepath = path.join(UPLOAD_DIR, filename);

    const bytes = await file.arrayBuffer();
    await writeFile(filepath, Buffer.from(bytes));

    const src = `/uploads/gallery/${filename}`;

    // Simpan metadata
    const existing = await readGalleryData();
    const newItem: GalleryItem = {
      id,
      src,
      label,
      sub,
      uploadedAt: new Date().toISOString(),
    };
    existing.unshift(newItem); // tambah di depan (terbaru duluan)
    await writeGalleryData(existing);

    return NextResponse.json({ success: true, item: newItem });
  } catch (err) {
    console.error("Gallery upload error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}

// DELETE — hapus foto (requires password)
export async function DELETE(req: NextRequest) {
  try {
    const { id, password } = await req.json();

    if (password !== UPLOAD_PASSWORD) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    const items = await readGalleryData();
    const item = items.find((i) => i.id === id);
    if (!item) {
      return NextResponse.json({ error: "Foto tidak ditemukan" }, { status: 404 });
    }

    // Hapus file
    const { unlink } = await import("fs/promises");
    const filepath = path.join(process.cwd(), "public", item.src);
    try {
      await unlink(filepath);
    } catch {
      // file mungkin sudah tidak ada, lanjutkan
    }

    // Update data
    const updated = items.filter((i) => i.id !== id);
    await writeGalleryData(updated);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Gallery delete error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
