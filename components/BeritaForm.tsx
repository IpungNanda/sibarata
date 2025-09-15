'use client';

import { useState } from 'react';
import { FiX, FiUpload } from 'react-icons/fi';

export interface BeritaFormValues {
  judul: string;
  konten: string;
  gambar: File | null;   // ⬅️ sekarang hanya File (atau null)
  penulis: string;
  kategori: string;
}

interface BeritaFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BeritaFormValues) => Promise<void>;
  initialData?: Omit<BeritaFormValues, 'gambar'> & { gambar?: string } | null;
  loading: boolean;
}

const BeritaForm: React.FC<BeritaFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  loading,
}) => {
  const [formData, setFormData] = useState({
    judul: initialData?.judul || '',
    konten: initialData?.konten || '',
    penulis: initialData?.penulis || '',
    kategori: initialData?.kategori || 'umum',
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    (initialData?.gambar as string) || ''
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.judul || !formData.konten || !formData.penulis || !imageFile) {
      alert('Judul, konten, penulis, dan gambar harus diisi!');
      return;
    }

    await onSubmit({
      ...formData,
      gambar: imageFile,
    });

    if (!initialData) {
      setFormData({
        judul: '',
        konten: '',
        penulis: '',
        kategori: 'umum',
      });
      setImageFile(null);
      setImagePreview('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? 'Edit Berita' : 'Tambah Berita'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul"
            value={formData.judul}
            onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
            className="border p-2 w-full"
          />
          <textarea
            placeholder="Konten"
            value={formData.konten}
            onChange={(e) => setFormData({ ...formData, konten: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Penulis"
            value={formData.penulis}
            onChange={(e) => setFormData({ ...formData, penulis: e.target.value })}
            className="border p-2 w-full"
          />
          <select
            value={formData.kategori}
            onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
            className="border p-2 w-full"
          >
            <option value="umum">Umum</option>
            <option value="pendidikan">Pendidikan</option>
            <option value="politik">Politik</option>
          </select>

          {/* Upload gambar */}
          <div className="border-dashed border-2 p-4 text-center">
            <input
              id="gambar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="gambar-upload" className="cursor-pointer flex flex-col items-center">
              <FiUpload className="w-8 h-8 mb-2 text-gray-400" />
              <span>Upload Gambar</span>
            </label>
          </div>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="preview"
              className="w-full h-48 object-cover rounded"
            />
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {loading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeritaForm;
