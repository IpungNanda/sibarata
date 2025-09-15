'use client';

import { useEffect, useState } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import AdminCard from '@/components/AdminCard';
import { FiFileText, FiInfo, FiBook, FiSettings } from 'react-icons/fi';

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    berita: 0,
    layanan: 0,
    informasi: 0,
    produkHukum: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [beritaSnapshot, layananSnapshot, informasiSnapshot, produkHukumSnapshot] =
          await Promise.all([
            getCountFromServer(collection(db, 'berita')),
            getCountFromServer(collection(db, 'layanan')),
            getCountFromServer(collection(db, 'informasi')),
            getCountFromServer(collection(db, 'produkHukum')),
          ]);

        setCounts({
          berita: beritaSnapshot.data().count,
          layanan: layananSnapshot.data().count,
          informasi: informasiSnapshot.data().count,
          produkHukum: produkHukumSnapshot.data().count,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AdminCard
          title="Berita"
          count={counts.berita}
          icon={<FiFileText className="w-6 h-6" />}
          color="bg-blue-500"
          href="/admin/berita"
        />
        <AdminCard
          title="Layanan"
          count={counts.layanan}
          icon={<FiSettings className="w-6 h-6" />}
          color="bg-green-500"
          href="/admin/layanan"
        />
        <AdminCard
          title="Informasi Publik"
          count={counts.informasi}
          icon={<FiInfo className="w-6 h-6" />}
          color="bg-purple-500"
          href="/admin/informasi"
        />
        <AdminCard
          title="Produk Hukum"
          count={counts.produkHukum}
          icon={<FiBook className="w-6 h-6" />}
          color="bg-orange-500"
          href="/admin/produk-hukum"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="font-medium">Berita baru ditambahkan</p>
              <p className="text-sm text-gray-500">2 jam yang lalu</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Berita
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
              <p className="font-medium">Layanan diperbarui</p>
              <p className="text-sm text-gray-500">5 jam yang lalu</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Layanan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}