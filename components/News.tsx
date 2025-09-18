'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const News = () => {
  return (
    <section id="berita" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-[#1c2c66] mb-4">Berita Terbaru</h2>
          <div className="w-24 h-1 bg-[#f8cb8b] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Dapatkan informasi terkini seputar kegiatan dan perkembangan terbaru di lingkungan Barata.
          </p>

          {/* 🔘 Tombol Selengkapnya */}
          <Link
            href="/berita"
            className="inline-block px-6 py-2 bg-[#f8cb8b] text-[#1c2c66] font-medium rounded-full shadow hover:bg-[#f8cb8b]/90 transition"
          >
            Selengkapnya
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default News;