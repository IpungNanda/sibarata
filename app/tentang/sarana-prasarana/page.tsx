"use client";

import Link from "next/link";
import Image from "next/image";
import { FiHome, FiCpu, FiPrinter, FiBook, FiShield, FiX } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { useEffect, useState } from "react";

interface GaleriItem {
  title: string;
  url: string;
}

const SaranaPrasaranaPage = () => {
  const [galeri, setGaleri] = useState<GaleriItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GaleriItem | null>(null);

  useEffect(() => {
    fetch("/api/galeri")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setGaleri(data.data);
      });
  }, []);

  const sidebarItems = [
    { title: "Sejarah Pemasyarakatan", href: "/tentang" },
    { title: "Kedudukan, Tugas dan Fungsi", href: "/tentang/tugas-fungsi" },
    { title: "Visi, Misi dan Tata Nilai", href: "/tentang/visi-misi" },
    { title: "Mars Pemasyarakatan", href: "/tentang/mars" },
    { title: "Corporate University", href: "/tentang/corporate-university" },
    { title: "Sarana dan Prasarana", href: "/tentang/sarana-prasarana" },
  ];

  const facilities = [
    {
      category: "Gedung dan Ruangan",
      icon: <FiHome className="text-2xl text-[#1c2c66]" />,
      items: [
        { name: "Gedung Utama", description: "Gedung 3 lantai dengan area kerja modern" },
        { name: "Ruang Kepala Bapas", description: "Ruang kerja pimpinan yang representatif" },
      ],
    },
    {
      category: "Teknologi Informasi",
      icon: <FiCpu className="text-2xl text-[#1c2c66]" />,
      items: [
        { name: "Jaringan Internet", description: "Koneksi fiber optic 100 Mbps" },
        { name: "Server Lokal", description: "Data center dengan redundansi" },
      ],
    },
    {
      category: "Kendaraan Operasional",
      icon: <FaCar className="text-2xl text-[#1c2c66]" />,
      items: [{ name: "Mobil Dinas", description: "Kendaraan operasional lapangan" }],
    },
    {
      category: "Peralatan Kantor",
      icon: <FiPrinter className="text-2xl text-[#1c2c66]" />,
      items: [{ name: "Printer & Scanner", description: "Multifunction devices" }],
    },
    {
      category: "Fasilitas Pendukung",
      icon: <FiShield className="text-2xl text-[#1c2c66]" />,
      items: [{ name: "Sistem CCTV", description: "Pengawasan 24 jam" }],
    },
    {
      category: "Fasilitas Kesejahteraan",
      icon: <FiBook className="text-2xl text-[#1c2c66]" />,
      items: [{ name: "Musholla", description: "Tempat ibadah yang nyaman" }],
    },
  ];

  const stats = [
    { number: "2,500", label: "M² Total Area" },
    { number: "45", label: "Ruangan" },
    { number: "80+", label: "Unit Komputer" },
    { number: "12", label: "Kendaraan" },
    { number: "24/7", label: "Security" },
    { number: "100%", label: "Internet Coverage" },
  ];

  const openModal = (item: GaleriItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tentang Satuan Kerja</h1>
          <nav className="text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/tentang" className="hover:text-white transition-colors">
              Tentang Satuan Kerja
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Sarana dan Prasarana</span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#1c2c66] mb-4">Tentang Satuan Kerja</h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        item.href === "/tentang/sarana-prasarana"
                          ? "bg-[#f8cb8b]/20 text-[#1c2c66] font-medium"
                          : "text-gray-700 hover:bg-[#f8cb8b]/10 hover:text-[#1c2c66]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] p-8 text-white">
                <div className="flex items-center">
                  <FiHome className="text-3xl mr-4" />
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Sarana dan Prasarana</h1>
                    <p className="text-gray-300">Fasilitas Penunjang Pelayanan Bapas Kelas I Surakarta</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Introduction */}
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Bapas Kelas I Surakarta dilengkapi dengan sarana dan prasarana modern yang mendukung
                    pelaksanaan tugas dan fungsi dalam memberikan pelayanan terbaik kepada masyarakat.
                    Semua fasilitas didesain untuk menunjang efisiensi, kenyamanan, dan keamanan.
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#f8cb8b]/20 rounded-lg p-4 text-center border border-[#f8cb8b]/30"
                    >
                      <div className="text-2xl font-bold text-[#1c2c66] mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Facilities Grid */}
                <div className="space-y-8">
                  {facilities.map((facility, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-[#f8cb8b]/20 px-6 py-4 border-b border-[#f8cb8b]/30">
                        <div className="flex items-center">
                          <div className="bg-white p-2 rounded-full mr-3">{facility.icon}</div>
                          <h2 className="text-xl font-semibold text-[#1c2c66]">{facility.category}</h2>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {facility.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-[#f8cb8b]/10 transition-colors border border-gray-200"
                            >
                              <div className="bg-[#1c2c66] p-2 rounded-full mr-4">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#1c2c66] mb-1">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gallery Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[#1c2c66] mb-6">Galeri Fasilitas</h2>
                  {galeri.length === 0 ? (
                    <p className="text-gray-500">Belum ada gambar.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {galeri.map((item, index) => (
                        <div
                          key={index}
                          className="relative h-48 rounded-lg overflow-hidden border border-gray-200 cursor-pointer group"
                          onClick={() => openModal(item)}
                        >
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-white font-semibold text-center px-2">{item.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal untuk gambar besar */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <FiX className="w-8 h-8 mt-5 mb-5" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-[#1c2c66] text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaranaPrasaranaPage;