'use client';

import { useEffect, useState } from 'react';
import { collection, getCountFromServer, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import AdminCard from '@/components/AdminCard';
import { FiFileText, FiInfo, FiBook, FiSettings, FiClipboard, FiUsers, FiUserCheck } from 'react-icons/fi';

export default function AdminDashboard() {
  const [counts, setCounts] = useState({
    layanan: 0,
    informasi: 0,
    produkHukum: 0,
    litmas: 0,
    bimbingan: 0,
    petugas: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // ambil jumlah koleksi berita, layanan, informasi, produkHukum
        const [beritaSnapshot, layananSnapshot, informasiSnapshot, produkHukumSnapshot] =
          await Promise.all([
            getCountFromServer(collection(db, 'berita')),
            getCountFromServer(collection(db, 'layanan')),
            getCountFromServer(collection(db, 'informasi')),
            getCountFromServer(collection(db, 'produkHukum')),
          ]);

        // ambil data statistik dari dokumen
        const statistikRef = doc(db, 'statistik', 'sibarata'); // misal dokumen bernama "sibarata"
        const statistikSnap = await getDoc(statistikRef);

        let statistikData = { litmas: 0, bimbingan: 0, petugas: 0 };
        if (statistikSnap.exists()) {
          statistikData = statistikSnap.data() as typeof statistikData;
        }

        setCounts({
          layanan: layananSnapshot.data().count,
          informasi: informasiSnapshot.data().count,
          produkHukum: produkHukumSnapshot.data().count,
          ...statistikData,
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
        {/* Data umum */}
        <AdminCard
          title="Layanan"
          count={counts.layanan}
          icon={<FiSettings className="w-6 h-6" />}
          color="bg-green-500"
        
        />
        <AdminCard
          title="Informasi Publik"
          count={counts.informasi}
          icon={<FiInfo className="w-6 h-6" />}
          color="bg-purple-500"
        />
        <AdminCard
          title="Produk Hukum"
          count={counts.produkHukum}
          icon={<FiBook className="w-6 h-6" />}
          color="bg-orange-500"
       
        />

        {/* Data Statistik Sibarata */}
        <AdminCard
          title="Jumlah Litmas"
          count={counts.litmas}
          icon={<FiClipboard className="w-6 h-6" />}
          color="bg-indigo-500"
  
        />
        <AdminCard
          title="Jumlah Bimbingan Klien"
          count={counts.bimbingan}
          icon={<FiUsers className="w-6 h-6" />}
          color="bg-teal-500"

        />
        <AdminCard
          title="Jumlah Petugas Survey"
          count={counts.petugas}
          icon={<FiUserCheck className="w-6 h-6" />}
          color="bg-pink-500"
          
        />
      </div>
    </div>
  );
}
