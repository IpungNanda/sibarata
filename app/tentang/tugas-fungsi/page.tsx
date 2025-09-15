import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FiCheckCircle, FiClipboard, FiUsers, FiBook, FiFileText, FiHelpCircle } from 'react-icons/fi';
import Footer from '@/components/Footer';

const TugasFungsiPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  const tugasFungsiItems = [
    {
      icon: <FiClipboard className="text-2xl text-blue-600" />,
      title: "Penelitian Kemasyarakatan (Litmas)",
      description: "Membuat penelitian kemasyarakatan (litmas) untuk bahan sidang peradilan anak, litmas bimbingan dan litmas integrasi"
    },
    {
      icon: <FiBook className="text-2xl text-blue-600" />,
      title: "Registrasi Klien Pemasyarakatan",
      description: "Melakukan registrasi klien pemasyarakatan"
    },
    {
      icon: <FiUsers className="text-2xl text-blue-600" />,
      title: "Bimbingan Kemasyarakatan",
      description: "Melakukan bimbingan kemasyarakatan dan pengentasan anak"
    },
    {
      icon: <FiFileText className="text-2xl text-blue-600" />,
      title: "Kehadiran di Sidang Pengadilan",
      description: "Mengikuti sidang pengadilan di Pengadilan Negeri dan sidang Tim Pengamat Pemasyarakatan di Lembaga Pemasyarakatan sesuai dengan peraturan perundang-undangan yang berlaku"
    },
    {
      icon: <FiHelpCircle className="text-2xl text-blue-600" />,
      title: "Bimbingan dan Bantuan",
      description: "Memberi bantuan bimbingan kepada bekas narapidana, anak Negara dan Klien pemasyarakatan yang memerlukan"
    },
    {
      icon: <FiCheckCircle className="text-2xl text-blue-600" />,
      title: "Tata Usaha",
      description: "Melakukan urusan tata usaha Bapas Surakarta"
    }
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
            <span>Kedudukan, Tugas dan Fungsi</span>
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
                        item.href === '/tentang/tugas-fungsi' 
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
                <h1 className="text-3xl font-bold mb-2">TUGAS DAN FUNGSI ORGANISASI</h1>
                <p className="text-blue-100">Struktur dan Tanggung Jawab Bapas Kelas I Surakarta</p>
              </div>

              <div className="p-8">
                <div className="prose max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                    <p className="text-gray-700 italic">
                      Tugas, Fungsi dan Struktur Organisasi Bapas Surakarta adalah sebagai berikut:
                    </p>
                  </div>

                  {/* Grid of Tugas & Fungsi */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {tugasFungsiItems.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start mb-4">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Struktur Organisasi */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Struktur Organisasi Bapas Surakarta</h2>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-center mb-6">
                        <div className="bg-blue-600 text-white py-3 px-6 rounded-t-lg">
                          <h3 className="font-semibold">Kepala Bapas</h3>
                        </div>
                        <div className="border border-gray-200 border-t-0 rounded-b-lg p-4">
                          <p className="text-gray-700">Membawahi seluruh unit kerja</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Sub Bagian Tata Usaha */}
                        <div className="text-center">
                          <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
                            <h4 className="font-semibold text-sm">Sub Bagian Tata Usaha</h4>
                          </div>
                          <div className="border border-gray-200 border-t-0 rounded-b-lg p-3">
                            <ul className="text-xs text-gray-600 space-y-1">
                              <li>Urusan Kepegawaian</li>
                              <li>Urusan Keuangan</li>
                              <li>Urusan Umum & BMN</li>
                            </ul>
                          </div>
                        </div>

                        {/* Seksi Bimbingan Klien Pemasyarakatan */}
                        <div className="text-center">
                          <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
                            <h4 className="font-semibold text-sm">Seksi Bimbingan Klien Pemasyarakatan</h4>
                          </div>
                          <div className="border border-gray-200 border-t-0 rounded-b-lg p-3">
                            <ul className="text-xs text-gray-600 space-y-1">
                              <li>Bimbingan Narapidana</li>
                              <li>Bimbingan Klien Anak</li>
                              <li>Bimbingan Klien Dewasa</li>
                            </ul>
                          </div>
                        </div>

                        {/* Seksi Pengamatan dan Penelitian Kemasyarakatan */}
                        <div className="text-center">
                          <div className="bg-blue-500 text-white py-2 px-4 rounded-t-lg">
                            <h4 className="font-semibold text-sm">Seksi Pengamatan dan Penelitian Kemasyarakatan</h4>
                          </div>
                          <div className="border border-gray-200 border-t-0 rounded-b-lg p-3">
                            <ul className="text-xs text-gray-600 space-y-1">
                              <li>Penelitian Kemasyarakatan</li>
                              <li>Pengamatan Klien</li>
                              <li>Assesmen dan Evaluasi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Informasi Tambahan */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Dasar Hukum</h3>
                    <p className="text-gray-600 text-sm">
                      Seluruh tugas dan fungsi Bapas Surakarta dilaksanakan berdasarkan peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 12 Tahun 1995 tentang Pemasyarakatan dan peraturan pelaksanaannya.
                    </p>
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

export default TugasFungsiPage;