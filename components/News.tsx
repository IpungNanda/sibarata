'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar?: string;
  tanggal: string;
  penulis: string;
  kategori?: string; // kategori opsional
}

const News = () => {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua'); // 👉 filter kategori

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch('/api/berita?limit=3');
        const data = await response.json();

        if (data.success) {
          setBerita(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch berita:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // daftar kategori (bisa disesuaikan)
  const kategoriList = ['Semua', 'Kegiatan', 'Pengumuman', 'Prestasi', 'Politik'];

  // filter berdasarkan kategori
  const beritaFiltered =
    selectedKategori === 'Semua'
      ? berita
      : berita.filter((item) => item.kategori === selectedKategori);

  if (loading) {
    return (
      <section id="berita" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Berita Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="berita" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi terkini seputar kegiatan dan perkembangan terbaru di lingkungan Barata.
          </p>
        </motion.div>

        {/* 🔘 tombol kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {kategoriList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`px-4 py-2 rounded-full border font-medium transition-colors ${
                selectedKategori === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beritaFiltered.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {item.gambar ? (
                <img
                  src={item.gambar}
                  alt={`Thumbnail ${item.judul}`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  Tidak ada gambar
                </div>
              )}
              <div className="p-6">
                {item.kategori && (
                  <button className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2 cursor-default">
                    {item.kategori}
                  </button>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.konten}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {new Date(item.tanggal).toLocaleDateString('id-ID', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center">
                    <FiUser className="mr-2" />
                    {item.penulis}
                  </div>
                </div>
                <Link
                  href={`/berita/${item.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  Baca Selengkapnya <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
