'use client';

import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  orderBy,
  query,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { uploadImage } from '@/lib/cloudinary';
import DataTable, { Column } from '@/components/DataTable';
import BeritaForm from '@/components/BeritaForm';
import { FiPlus, FiEdit, FiTrash2, FiEye, FiSearch } from 'react-icons/fi';

interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: Date;
  penulis: string;
  kategori: string;
}

export default function BeritaPage() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [filteredBerita, setFilteredBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<Berita | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'berita'), orderBy('tanggal', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        tanggal: doc.data().tanggal?.toDate(),
      })) as Berita[];
      setBerita(data);
      setFilteredBerita(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter berita berdasarkan search term
  useEffect(() => {
    const filtered = berita.filter(item =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.penulis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.konten.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBerita(filtered);
  }, [searchTerm, berita]);

  const handleSubmit = async (formData: any) => {
    setFormLoading(true);

    try {
      let imageUrl = formData.gambar;

      // Upload gambar baru jika ada
      if (formData.gambar instanceof File) {
        imageUrl = await uploadImage(formData.gambar);
      }

      if (editingItem) {
        // Update existing document (jangan reset tanggal publikasi)
        await updateDoc(doc(db, 'berita', editingItem.id), {
          judul: formData.judul,
          konten: formData.konten,
          gambar: imageUrl,
          penulis: formData.penulis,
          kategori: formData.kategori,
          updatedAt: Timestamp.now()
        });
      } else {
        // Add new document
        await addDoc(collection(db, 'berita'), {
          judul: formData.judul,
          konten: formData.konten,
          gambar: imageUrl,
          penulis: formData.penulis,
          kategori: formData.kategori,
          tanggal: Timestamp.now(),
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        });
      }

      setShowModal(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving berita:', error);
      alert('Terjadi kesalahan saat menyimpan berita');
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (item: Berita) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      try {
        await deleteDoc(doc(db, 'berita', id));
      } catch (error) {
        console.error('Error deleting berita:', error);
        alert('Terjadi kesalahan saat menghapus berita');
      }
    }
  };

  const handleView = (item: Berita) => {
    // Sementara pakai alert, bisa nanti dibuat modal detail
    alert(`📌 ${item.judul}\n✍️ ${item.penulis}\n📅 ${item.tanggal.toLocaleDateString('id-ID')}\n🏷️ ${item.kategori}`);
  };

  const columns: Column[] = [
    { 
      header: 'Judul', 
      accessor: 'judul', 
      type: 'text',
      render: (value: string, row: Berita) => (
        <div>
          <div className="font-semibold text-gray-900 line-clamp-2">{value}</div>
          <div className="text-sm text-gray-500">{row.kategori}</div>
        </div>
      )
    },
    { 
      header: 'Gambar',
      accessor: 'gambar',
      type: 'text',
      render: (value: string) =>
        value ? (
          <img
            src={value}
            alt="thumbnail"
            className="w-16 h-16 object-cover rounded-lg border"
          />
        ) : (
          <div className="text-gray-400 italic">No image</div>
        )
    },
    { 
      header: 'Penulis', 
      accessor: 'penulis', 
      type: 'text' 
    },
    { 
      header: 'Tanggal', 
      accessor: 'tanggal', 
      type: 'date',
      render: (value: Date) => (
        <div className="text-sm text-gray-600">
          {value.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </div>
      )
    },
    {
      header: 'Aksi',
      accessor: 'id',
      render: (id: string, row: Berita) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleView(row)}
            className="text-green-600 hover:text-green-800 p-1"
            title="Lihat Detail"
          >
            <FiEye />
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="Edit"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="text-red-600 hover:text-red-800 p-1"
            title="Hapus"
          >
            <FiTrash2 />
          </button>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Kelola Berita</h1>
          <p className="text-gray-600">Total {berita.length} berita</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-primary-700 transition-colors"
        >
          <FiPlus className="mr-2" /> Tambah Berita
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <DataTable columns={columns} data={filteredBerita} />

      <BeritaForm
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingItem(null);
        }}
        onSubmit={handleSubmit}
        initialData={editingItem}
        loading={formLoading}
      />
    </div>
  );
}
