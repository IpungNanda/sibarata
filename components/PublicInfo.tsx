'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Info {
  id: string;
  judul: string;
  isi: string;
  tanggal?: string; // ISO string
  gambar?: string;
  kategori?: string;
}

export default function PublicInfo() {
  const [infoList, setInfoList] = useState<Info[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<string>(''); // 👉 kategori filter

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'informasi'),
      (snap) => {
        const data = snap.docs.map((d) => {
          const dd = d.data() as any;
          let tanggalIso: string | undefined;

          if (dd.tanggal?.toDate) {
            tanggalIso = dd.tanggal.toDate().toISOString();
          } else if (typeof dd.tanggal === 'string') {
            tanggalIso = dd.tanggal;
          }

          return {
            id: d.id,
            judul: dd.judul ?? '',
            isi: dd.isi ?? '',
            gambar: dd.gambar ?? '',
            kategori: dd.kategori ?? '',
            tanggal: tanggalIso,
          } as Info;
        });

        data.sort((a, b) => {
          if (!a.tanggal) return 1;
          if (!b.tanggal) return -1;
          return new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime();
        });

        setInfoList(data);
      },
      (err) => {
        console.error('PublicInfo onSnapshot error:', err);
      }
    );

    return () => unsub();
  }, []);

  // 👉 filter berdasarkan kategori
  const filteredList =
    selectedKategori === ''
      ? infoList
      : infoList.filter((item) => item.kategori === selectedKategori);

  const kategoriList = ['Umum', 'Pengumuman', 'Penting', 'Kegiatan']; // kategori yang tersedia

  return (
    <section id="informasi" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Informasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai informasi penting dan pengumuman resmi.
          </p>
        </div>

        {/* 👉 tombol filter kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setSelectedKategori('')}
            className={`px-4 py-2 rounded-full border ${
              selectedKategori === ''
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            Semua
          </button>
          {kategoriList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedKategori === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredList.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada informasi.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredList.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
              >
                {item.gambar && (
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  {item.kategori && (
                    <button className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-2 cursor-default">
                      {item.kategori}
                    </button>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{item.judul}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.isi}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-2" />
                      {item.tanggal
                        ? new Date(item.tanggal).toLocaleString('id-ID')
                        : '-'}
                    </div>
                    <Link
                      href={`/informasi/${item.id}`}
                      className="text-primary-600 hover:text-primary-700 flex items-center"
                    >
                      Selengkapnya <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
