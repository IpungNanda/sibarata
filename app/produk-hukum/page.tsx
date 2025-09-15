"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiFileText, FiExternalLink, FiSearch, FiCalendar, FiFilter, FiX } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface ProdukHukum {
  id: string;
  judul: string;
  tahun: number;
  link: string;
}

const ProdukHukumPage = () => {
  const [produkHukum, setProdukHukum] = useState<ProdukHukum[]>([]);
  const [filteredProdukHukum, setFilteredProdukHukum] = useState<ProdukHukum[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // 🔹 Ambil data sekali dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "produkHukum"));
        const data: ProdukHukum[] = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as ProdukHukum);
        });
        setProdukHukum(data);
        setFilteredProdukHukum(data);
      } catch (error) {
        console.error("Error ambil data produk hukum:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 Filter otomatis setiap kali searchTerm / yearFilter berubah
  useEffect(() => {
    let result = produkHukum;

    if (searchTerm) {
      result = result.filter((item) =>
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (yearFilter) {
      result = result.filter((item) => item.tahun.toString() === yearFilter);
    }

    setFilteredProdukHukum(result);
  }, [searchTerm, yearFilter, produkHukum]);

  const clearFilters = () => {
    setSearchTerm("");
    setYearFilter("");
    setFilteredProdukHukum(produkHukum);
  };

  // 🔹 Tahun unik untuk dropdown filter
  const uniqueYears = [...new Set(produkHukum.map((item) => item.tahun))].sort((a, b) => b - a);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Produk Hukum</h1>
        <p className="text-gray-600">Kumpulan peraturan dan undang-undang yang berlaku</p>
      </motion.div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari produk hukum..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <FiFilter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-gray-100"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <FiCalendar className="h-5 w-5 text-gray-400" />
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Semua Tahun</option>
                  {uniqueYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {(searchTerm || yearFilter) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 ml-auto"
                >
                  <FiX className="h-4 w-4" />
                  Hapus Filter
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Info hasil */}
      <div className="flex justify-between items-center mb-6 text-gray-700">
        <p>
          Menampilkan <span className="font-bold">{filteredProdukHukum.length}</span> dari{" "}
          {produkHukum.length} produk hukum
          {(searchTerm || yearFilter) && <span className="text-sm text-gray-500"> (difilter)</span>}
        </p>
      </div>

      {/* Daftar Produk Hukum */}
      {filteredProdukHukum.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProdukHukum.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiFileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-3">
                    {item.judul}
                  </h3>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-5">
                  <FiCalendar className="mr-1.5" />
                  <span>Tahun: {item.tahun}</span>
                </div>
                <a
                    href={`/produk-hukum/${item.id}`} // arahkan ke halaman detail user
                    className="text-blue-600 hover:underline flex items-center"
                    >
                    <FiExternalLink className="mr-1" /> Lihat Detail
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <FiFileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada produk hukum ditemukan</h3>
          <p className="text-gray-500">
            {searchTerm || yearFilter
              ? "Coba ubah kata kunci pencarian atau filter tahun yang digunakan"
              : "Belum ada produk hukum yang tersedia"}
          </p>
          {(searchTerm || yearFilter) && (
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Hapus filter
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default ProdukHukumPage;
