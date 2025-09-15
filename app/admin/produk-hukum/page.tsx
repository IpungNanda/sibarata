"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FiSave, FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";

interface ProdukHukum {
  id: string;
  judul: string;
  tahun: number;
  linkDownload: string;
  linkViewer: string;
}

const AdminProdukHukumPage = () => {
  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState<number | string>("");
  const [linkDownload, setLinkDownload] = useState("");
  const [linkViewer, setLinkViewer] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [produkHukum, setProdukHukum] = useState<ProdukHukum[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // Ambil data dari Firestore
  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "produkHukum"));
    const data: ProdukHukum[] = [];
    snapshot.forEach((d) => {
      data.push({ id: d.id, ...d.data() } as ProdukHukum);
    });
    setProdukHukum(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Tambah atau Update data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (editId) {
        // Update
        const docRef = doc(db, "produkHukum", editId);
        await updateDoc(docRef, {
          judul,
          tahun: Number(tahun),
          linkDownload,
          linkViewer,
        });
        setMessage("✅ Data berhasil diperbarui!");
      } else {
        // Tambah
        await addDoc(collection(db, "produkHukum"), {
          judul,
          tahun: Number(tahun),
          linkDownload,
          linkViewer,
          createdAt: new Date(),
        });
        setMessage("✅ Data berhasil disimpan!");
      }

      setJudul("");
      setTahun("");
      setLinkDownload("");
      setLinkViewer("");
      setEditId(null);
      fetchData();
    } catch (error) {
      console.error("Error simpan data:", error);
      setMessage("❌ Gagal menyimpan data!");
    } finally {
      setLoading(false);
    }
  };

  // Edit data
  const handleEdit = (item: ProdukHukum) => {
    setEditId(item.id);
    setJudul(item.judul);
    setTahun(item.tahun);
    setLinkDownload(item.linkDownload);
    setLinkViewer(item.linkViewer);
  };

  // Hapus data
  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await deleteDoc(doc(db, "produkHukum", id));
      setMessage("✅ Data berhasil dihapus!");
      fetchData();
    } catch (error) {
      console.error("Error hapus data:", error);
      setMessage("❌ Gagal menghapus data!");
    }
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Admin - Produk Hukum
        </motion.h1>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-8"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Judul Undang-Undang
            </label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Contoh: Undang-Undang Nomor 1 Tahun 2025"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tahun
            </label>
            <input
              type="number"
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="2025"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link Download Dokumen (Google Drive)
            </label>
            <input
              type="url"
              value={linkDownload}
              onChange={(e) => setLinkDownload(e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="https://drive.google.com/uc?export=download&id=..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link Viewer Dokumen (Google Drive)
            </label>
            <input
              type="url"
              value={linkViewer}
              onChange={(e) => setLinkViewer(e.target.value)}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="https://drive.google.com/file/d/FILE_ID/preview"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Menyimpan..." : (
              <>
                <FiSave className="mr-2" /> {editId ? "Update" : "Simpan"}
              </>
            )}
          </button>

          {message && (
            <p className="text-center mt-4 font-medium text-gray-700">{message}</p>
          )}
        </motion.form>

        {/* List Data */}
        <div className="grid gap-4">
          {produkHukum.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{item.judul}</h3>
                <p className="text-sm text-gray-600">Tahun: {item.tahun}</p>
              </div>
              <div className="flex space-x-3 mt-3 sm:mt-0">
                <a
                  href={item.linkViewer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <FiExternalLink className="mr-1" /> Lihat Detail
                </a>
                <button
                  onClick={() => handleEdit(item)}
                  className="text-yellow-600 hover:text-yellow-700 flex items-center"
                >
                  <FiEdit2 className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-700 flex items-center"
                >
                  <FiTrash2 className="mr-1" /> Hapus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminProdukHukumPage;
