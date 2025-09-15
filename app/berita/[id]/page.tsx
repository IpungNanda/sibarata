'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2 } from 'react-icons/fi';

interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
  penulis: string;
  kategori: string;
}

export default function DetailBeritaPage() {
  const params = useParams();
  const router = useRouter();
  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBerita, setRelatedBerita] = useState<Berita[]>([]);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(`/api/berita/${params.id}`);
        const data = await response.json();
        
        if (data.success) {
          setBerita(data.data);
          
          // Fetch related news
          const relatedResponse = await fetch(`/api/berita?limit=3&category=${data.data.kategori}`);
          const relatedData = await relatedResponse.json();
          
          if (relatedData.success) {
            setRelatedBerita(relatedData.data.filter((item: Berita) => item.id !== params.id));
          }
        } else {
          router.push('/#berita');
        }
      } catch (error) {
        console.error('Failed to fetch berita:', error);
        router.push('/#berita');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBerita();
    }
  }, [params.id, router]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: berita?.judul,
          text: berita?.konten.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      // fallback untuk browser tanpa Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link berita disalin ke clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
            <div className="h-96 bg-gray-300 rounded mb-6"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">
            Berita yang Anda cari tidak ditemukan atau mungkin telah dihapus.
          </p>
          <Link
            href="/#berita"
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
          >
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  const waktuBaca = Math.ceil(berita.konten.split(' ').length / 200);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link
            href="/#berita"
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Kembali ke Berita
          </Link>
          
          <button
            onClick={handleShare}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FiShare2 className="mr-2" />
            Bagikan
          </button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
              {berita.kategori}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <FiClock className="mr-1" />
              {waktuBaca} menit dibaca
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {berita.judul}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <FiUser className="mr-2" />
              <span className="font-medium">{berita.penulis}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>{new Date(berita.tanggal).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        {berita.gambar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={berita.gambar}
              alt={berita.judul}
              className="w-full h-96 object-cover rounded-lg"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatContent(berita.konten) }}
          />
        </motion.article>

        {/* Related News */}
        {relatedBerita.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Berita Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBerita.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.id}`}
                  className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {item.gambar && (
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="w-full h-32 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {new Date(item.tanggal).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Comments Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Komentar</h2>
          <p className="text-gray-600">Fitur komentar akan segera hadir!</p>
        </motion.section>
      </div>
    </div>
  );
}

// Helper function untuk format content
function formatContent(content: string): string {
  const paragraphs = content.split('\n\n');
  return paragraphs.map(paragraph => {
    if (paragraph.trim()) {
      return `<p>${paragraph.trim()}</p>`;
    }
    return '';
  }).join('');
}
