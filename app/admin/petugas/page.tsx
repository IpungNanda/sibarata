"use client";

import { useState, useEffect } from "react";

interface Statistik {
  litmas: number;
  bimbingan: number;
  petugas: number;
}

export default function AdminPetugasPage() {
  const [form, setForm] = useState<Statistik>({
    litmas: 0,
    bimbingan: 0,
    petugas: 0,
  });
  const [data, setData] = useState<Statistik | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    const res = await fetch("/api/statistik");
    const d = await res.json();
    if (d) setData(d);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = isEdit ? "PUT" : "POST";
    await fetch("/api/statistik", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert(isEdit ? "Data berhasil diperbarui!" : "Data berhasil disimpan!");
    fetchData();
    setIsEdit(false);
    setForm({ litmas: 0, bimbingan: 0, petugas: 0 });
  };

  const handleDelete = async () => {
    if (!confirm("Yakin ingin hapus data statistik?")) return;
    await fetch("/api/statistik", { method: "DELETE" });
    setData(null);
    alert("Data berhasil dihapus!");
  };

  const handleEdit = () => {
    if (data) {
      setForm(data);
      setIsEdit(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Kelola Statistik Sibarata</h2>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-gray-700">Jumlah Litmas</label>
          <input type="number" name="litmas" value={form.litmas} onChange={handleChange}
            className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Jumlah Bimbingan Klien</label>
          <input type="number" name="bimbingan" value={form.bimbingan} onChange={handleChange}
            className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Jumlah Petugas Survey</label>
          <input type="number" name="petugas" value={form.petugas} onChange={handleChange}
            className="w-full border rounded p-2" />
        </div>

        <div className="flex gap-3">
          <button type="submit"
            className={`${isEdit ? "bg-yellow-600 hover:bg-yellow-700" : "bg-blue-600 hover:bg-blue-700"} text-white px-4 py-2 rounded`}>
            {isEdit ? "Update Data" : "Simpan Data"}
          </button>
          {isEdit && (
            <button type="button" onClick={() => { setIsEdit(false); setForm({ litmas: 0, bimbingan: 0, petugas: 0 }); }}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
              Batal
            </button>
          )}
        </div>
      </form>

      {/* Tabel Data */}
      {data && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Data Statistik Saat Ini</h3>
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Jumlah Litmas</th>
                <th className="border p-2">Jumlah Bimbingan Klien</th>
                <th className="border p-2">Jumlah Petugas Survey</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-center">{data.litmas}</td>
                <td className="border p-2 text-center">{data.bimbingan}</td>
                <td className="border p-2 text-center">{data.petugas}</td>
                <td className="border p-2 text-center space-x-2">
                  <button onClick={handleEdit}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                  <button onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
