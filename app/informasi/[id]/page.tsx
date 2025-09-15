'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

interface Informasi {
  id: string;
  judul: string;
  isi: string;
  kategori?: string;
  tanggal?: Date;
  gambar?: string;
}

export default function DetailInformasiPage() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<Informasi | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'informasi', id as string);
        const snap = await getDoc(docRef);
        if (!snap.exists()) {
          router.push('/#informasi');
          return;
        }
        const d = snap.data() as any;
        setData({
          id: snap.id,
          judul: d.judul,
          isi: d.isi,
          kategori: d.kategori,
          gambar: d.gambar,
          tanggal: d.tanggal?.toDate?.() ?? undefined,
        });
      } catch (err) {
        console.error('fetch detail error:', err);
        router.push('/#informasi');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, router]);

  if (loading) return <div className="p-6">Memuat...</div>;
  if (!data) return <div className="p-6">Informasi tidak ditemukan</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Tombol kembali */}
      <Link
        href="/#informasi"
        className="inline-flex items-center text-primary-600 mb-6 hover:underline"
      >
        <FiArrowLeft className="mr-2" /> Kembali
      </Link>

      {/* Gambar Full */}
      {data.gambar && (
        <div className="w-full rounded-xl overflow-hidden shadow-md border mb-8">
          <img
            src={data.gambar}
            alt={data.judul}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Judul */}
      <h1 className="text-3xl font-bold mb-3">{data.judul}</h1>

      {/* Info meta */}
      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
        <span>Kategori: {data.kategori || '-'}</span>
        <span>
          {data.tanggal
            ? data.tanggal.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })
            : '-'}
        </span>
      </div>

      {/* Isi konten */}
      <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
        {data.isi}
      </div>
    </div>
  );
}
