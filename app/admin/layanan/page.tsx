'use client';

import { useEffect, useState } from 'react';

export default function AdminLayanan() {
  const [layanan, setLayanan] = useState<any[]>([]);
  const [form, setForm] = useState({ nama: '', deskripsi: '', icon: '', link: '', featured: false });
  const [editId, setEditId] = useState<string | null>(null);

  const fetchData = async () => {
    const res = await fetch('/api/layanan');
    const data = await res.json();
    if (data.success) setLayanan(data.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      await fetch('/api/layanan', {
        method: 'PUT',
        body: JSON.stringify({ id: editId, ...form }),
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // CREATE
      await fetch('/api/layanan', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    setForm({ nama: '', deskripsi: '', icon: '', link: '', featured: false });
    setEditId(null);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/layanan', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });
    fetchData();
  };

  const handleEdit = (item: any) => {
    setForm({
      nama: item.nama,
      deskripsi: item.deskripsi,
      icon: item.icon,
      link: item.link,
      featured: item.featured || false,
    });
    setEditId(item.id);
  };

  const handleCancelEdit = () => {
    setForm({ nama: '', deskripsi: '', icon: '', link: '', featured: false });
    setEditId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Layanan</h1>

      {/* Form tambah / edit layanan */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-8">
        <input
          placeholder="Nama"
          value={form.nama}
          onChange={e => setForm({ ...form, nama: e.target.value })}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Deskripsi"
          value={form.deskripsi}
          onChange={e => setForm({ ...form, deskripsi: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          placeholder="Icon (misal: FiHome)"
          value={form.icon}
          onChange={e => setForm({ ...form, icon: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          placeholder="Link"
          value={form.link}
          onChange={e => setForm({ ...form, link: e.target.value })}
          className="border p-2 w-full"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={e => setForm({ ...form, featured: e.target.checked })}
          />
          <span>Tampilkan sebagai featured</span>
        </label>
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? 'Update Layanan' : 'Tambah Layanan'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* Tabel layanan */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Deskripsi</th>
            <th className="border p-2">Icon</th>
            <th className="border p-2">Link</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {layanan.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.deskripsi}</td>
              <td className="border p-2">{item.icon}</td>
              <td className="border p-2">{item.link}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
