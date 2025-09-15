"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FiCalendar, FiDownload, FiFileText, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

interface ProdukHukum {
  id: string;
  judul: string;
  tahun: number;
  linkDownload: string; // untuk unduh
  linkViewer: string;   // untuk iframe
}

const DetailProdukHukumPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProdukHukum | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const docRef = doc(db, "produkHukum", id as string);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setData({ id: snapshot.id, ...snapshot.data() } as ProdukHukum);
        }
      } catch (error) {
        console.error("Error ambil detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl font-semibold text-gray-700">
          ❌ Data tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Link
          href="/produk-hukum"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          <FiArrowLeft className="w-4 h-4" />
          Kembali ke Produk Hukum
        </Link>
      </div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Detail Produk Hukum
      </motion.h1>

      {/* Info Undang-Undang */}
      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {data.judul}
        </h2>
        <p className="flex items-center text-gray-600">
          <FiCalendar className="mr-2" /> Tahun: {data.tahun}
        </p>
      </div>

      {/* PDF Viewer */}
      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FiFileText className="mr-2 text-blue-600" /> Dokumen PDF
        </h3>
        <div className="w-full h-[600px] border rounded-lg overflow-hidden">
          <iframe
            src={data.linkViewer}
            className="w-full h-full"
            title="Dokumen Produk Hukum"
          ></iframe>
        </div>
      </div>

      {/* Tombol Unduh */}
      <div className="flex justify-end">
        <a
          href={data.linkDownload}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          <FiDownload className="w-5 h-5" />
          Unduh Dokumen
        </a>
      </div>
    </section>
  );
};

export default DetailProdukHukumPage;
