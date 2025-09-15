import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FiHome, FiWifi, FiMonitor , FiBook, FiPrinter, FiServer, FiShield, FiCpu, FiVideo } from 'react-icons/fi';
import Image from 'next/image';
import { FaCar } from "react-icons/fa";
import Footer from '@/components/Footer';

const SaranaPrasaranaPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  const facilities = [
    {
      category: "Gedung dan Ruangan",
      icon: <FiHome className="text-2xl" />,
      items: [
        { name: "Gedung Utama", description: "Gedung 3 lantai dengan area kerja modern" },
        { name: "Ruang Kepala Bapas", description: "Ruang kerja pimpinan yang representatif" },
        { name: "Ruang Rapat", description: "Ruang rapat kapasitas 30 orang" },
        { name: "Ruang Bimbingan Klien", description: "Ruang konseling dan bimbingan" },
        { name: "Ruang Pelayanan Publik", description: "Area pelayanan untuk masyarakat" },
        { name: "Ruang Arsip", description: "Penyimpanan dokumen terorganisir" }
      ]
    },
    {
      category: "Teknologi Informasi",
      icon: <FiCpu className="text-2xl" />,
      items: [
        { name: "Jaringan Internet", description: "Koneksi fiber optic 100 Mbps" },
        { name: "Server Lokal", description: "Data center dengan redundansi" },
        { name: "Komputer Workstation", description: "PC modern untuk semua staf" },
        { name: "Sistem Informasi", description: "Aplikasi terintegrasi SIMPEL" },
        { name: "Video Conference", description: "Facilitas meeting virtual" },
        { name: "Security System", description: "Firewall dan sistem keamanan" }
      ]
    },
    {
      category: "Kendaraan Operasional",
      icon: <FaCar className="text-2xl" />,
      items: [
        { name: "Mobil Dinas", description: "Kendaraan operasional lapangan" },
        { name: "Motor Operasional", description: "Kendaraan cepat untuk mobilitas" },
        { name: "Ambulance", description: "Kendaraan kesehatan darurat" },
        { name: "Bus Penjemputan", description: "Transportasi klien" }
      ]
    },
    {
      category: "Peralatan Kantor",
      icon: <FiPrinter className="text-2xl" />,
      items: [
        { name: "Printer & Scanner", description: "Multifunction devices" },
        { name: "Photocopy", description: "Mesin fotokopi high-speed" },
        { name: "Projector", description: "LCD projector presentasi" },
        { name: "Audio System", description: "Sound system rapat" },
        { name: "Furniture Ergonomis", description: "Meja dan kursi modern" }
      ]
    },
    {
      category: "Fasilitas Pendukung",
      icon: <FiShield className="text-2xl" />,
      items: [
        { name: "Sistem CCTV", description: "Pengawasan 24 jam" },
        { name: "Access Control", description: "Sistem keamanan pintu" },
        { name: "Generator Set", description: "Cadangan listrik darurat" },
        { name: "AC Central", description: "Sistem pendingin ruangan" },
        { name: "Perpustakaan", description: "Koleksi buku hukum" }
      ]
    },
    {
      category: "Fasilitas Kesejahteraan",
      icon: <FiBook className="text-2xl" />,
      items: [
        { name: "Musholla", description: "Tempat ibadah yang nyaman" },
        { name: "Kantin", description: "Area makan dan istirahat" },
        { name: "Ruang Kesehatan", description: "P3K dan kesehatan" },
        { name: "Parkir Area", description: "Area parkir aman dan luas" },
        { name: "Taman", description: "Area hijau dan tempat istirahat" }
      ]
    }
  ];

  const stats = [
    { number: "2,500", label: "M² Total Area" },
    { number: "45", label: "Ruangan" },
    { number: "80+", label: "Unit Komputer" },
    { number: "12", label: "Kendaraan" },
    { number: "24/7", label: "Security" },
    { number: "100%", label: "Internet Coverage" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tentang Satuan Kerja</h1>
          <nav className="text-sm text-blue-100">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/tentang" className="hover:text-white transition-colors">Tentang Satuan Kerja</Link>
            <span className="mx-2">/</span>
            <span>Sarana dan Prasarana</span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tentang Satuan Kerja</h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        item.href === '/tentang/sarana-prasarana' 
                          ? 'bg-blue-100 text-blue-800 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                <div className="flex items-center">
                  <FiHome className="text-3xl mr-4" />
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Sarana dan Prasarana</h1>
                    <p className="text-blue-100">Fasilitas Penunjang Pelayanan Bapas Kelas I Surakarta</p>
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
                    <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Facilities Grid */}
                <div className="space-y-8">
                  {facilities.map((facility, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            {facility.icon}
                          </div>
                          <h2 className="text-xl font-semibold text-gray-800">{facility.category}</h2>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {facility.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                              <div className="bg-white p-2 rounded-full mr-4">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Galeri Fasilitas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-building.jpg"
                        alt="Gedung Utama Bapas"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Gedung Utama</span>
                      </div>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-meeting.jpg"
                        alt="Ruang Rapat"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Ruang Rapat</span>
                      </div>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder-computer.jpg"
                        alt="Ruang Komputer"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Ruang Kerja</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maintenance Info */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pemeliharaan Fasilitas</h3>
                  <p className="text-gray-600 text-sm">
                    Semua sarana dan prasarana dilakukan pemeliharaan rutin dan berkala untuk 
                    memastikan ketersediaan dan keandalan dalam mendukung pelayanan. Laporan 
                    kerusakan dapat disampaikan melalui sistem ticketing yang tersedia.
                  </p>
                </div>

                {/* Contact Support */}
                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Dukungan Teknis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">IT Support</h4>
                      <p className="text-sm text-gray-600">Ext. 123 • itsupport@bapassurakarta.go.id</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">General Affairs</h4>
                      <p className="text-sm text-gray-600">Ext. 124 • ga@bapassurakarta.go.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        </div>
    </div>
  );
};

export default SaranaPrasaranaPage;