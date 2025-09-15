"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { uploadImage } from "@/lib/cloudinary"; // pakai fungsi yang sudah ada

interface Informasi {
  id: string;
  judul: string;
  isi: string;
  gambar: string;
  kategori?: string;
  tanggal?: any;
}

export default function InformasiPage() {
  const [informasiList, setInformasiList] = useState<Informasi[]>([]);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);
  const [kategori, setKategori] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  // ambil data dari firestore
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "informasi"));
    const data = querySnapshot.docs.map(
      (docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Informasi)
    );
    setInformasiList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (gambar) {
        imageUrl = await uploadImage(gambar); // upload ke cloudinary
      }

      if (editId) {
        const docRef = doc(db, "informasi", editId);
        await updateDoc(docRef, {
          judul,
          isi,
          kategori,
          ...(imageUrl && { gambar: imageUrl }),
          tanggal: serverTimestamp(), // update waktu
        });
        setEditId(null);
      } else {
        await addDoc(collection(db, "informasi"), {
          judul,
          isi,
          kategori,
          gambar: imageUrl,
          tanggal: serverTimestamp(), // simpan waktu saat buat
        });
      }

      setJudul("");
      setIsi("");
      setKategori("");
      setGambar(null);

      await fetchData();
    } catch (err) {
      console.error("Error menyimpan data:", err);
    }
  };

  const handleEdit = (item: Informasi) => {
    setJudul(item.judul);
    setIsi(item.isi);
    setKategori(item.kategori || "");
    setGambar(null); // reset gambar
    setEditId(item.id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "informasi", id));
      setInformasiList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error hapus data:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Kelola Informasi</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Isi informasi"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className="border p-2 w-full"
          required
        />

        {/* Dropdown kategori */}
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="border p-2 w-full"
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="Umum">Umum</option>
          <option value="Pengumuman">Pengumuman</option>
          <option value="Penting">Penting</option>
          <option value="Kegiatan">Kegiatan</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setGambar(e.target.files?.[0] || null)}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {editId ? "Update Informasi" : "Tambah Informasi"}
        </button>
      </form>

      <div className="grid gap-4">
        {informasiList.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <h2 className="font-semibold">{item.judul}</h2>
            <p>{item.isi}</p>
            {item.kategori && (
              <span className="text-sm text-gray-500">
                Kategori: {item.kategori}
              </span>
            )}
            {item.gambar && (
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-32 h-32 object-cover mt-2"
              />
            )}
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
