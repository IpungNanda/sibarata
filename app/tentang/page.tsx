import Link from 'next/link';
import Image from 'next/image';

const TentangPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
              <span className="text-xl font-bold">S</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Tentang Satuan Kerja</h1>
              <p className="text-blue-100 mt-1">Sistem Informasi Bapas Surakarta</p>
            </div>
          </div>
          
          <nav className="text-sm text-blue-100 flex items-center">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/tentang" className="hover:text-white transition-colors">Tentang Satuan Kerja</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Sejarah Pemasyarakatan</span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Tentang Satuan Kerja
              </h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className={`block py-2 px-3 rounded-md transition-colors text-sm ${
                        item.href === '/tentang' 
                          ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
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
              {/* Hero Image */}
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder-history.jpg"
                  alt="Sejarah Pemasyarakatan"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-700/90 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Sejarah Pemasyarakatan</h2>
                    <p className="text-blue-100">Perjalanan panjang sistem pemasyarakatan di Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas merupakan Unit Pelaksana Teknis (UPT) di bidang Pemasyarakatan luar lembaga yang merupakan pranata atau satuan kerja dalam lingkungan Kementerian Hukum dan HAM Republik Indonesia yang bertugas melakukan pembimbingan terhadap klien sampai seorang klien dapat memikul beban/masalah dan dapat membuat pola sendiri dalam menanggulangi beban permasalahan hidup. Pembimbingan yang dimaksud dilakukan di luar Lapas ataupun Rutan.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas dahulu dikenal dengan istilah Balai Bispa yang kepanjangannya adalah Balai Bimbingan Kemasyarakatan dan Pengentasan Anak. Balai Bispa didirikan berdasarkan Keputusan Menteri Kehakiman RI Nomor : M.02-PR.07.03 tahun 1987 tentang Organisasi dan Tata Kerja Balai Bimbingan Kemasyarakatan dan Pengentasan Anak yang bertugas melakukan pembinaan luar lembaga pemasyarakatan yang berada dibawah dan bertanggung jawab langsung kepada Kepala Kantor Wilayah.
                  </p>

                  {/* Image */}
                  <div className="flex justify-center my-8">
                    <div className="relative w-full max-w-2xl h-64">
                      <Image
                        src="/placeholder-old-building.jpg"
                        alt="Gedung Bapas Lama"
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Namun sesuai perkembangan kondisi, tugas dan fungsi berdasarkan Undang-Undang Nomor: 12 tahun 1995 tentang Pemasyarakatan, istilah Bispa diganti menjadi Bapas.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">
                    Bapas Kelas I Surakarta
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas Kelas I Surakarta (Bapas Surakarta) adalah satu dari 90 UPT Bapas yang ada di Indonesia. UPT ini berada di bawah Kantor Wilayah Kementerian Hukum dan Hak Asasi Manusia Jawa Tengah dan berkedudukan di JL. Rm. Said No. 259 Manahan, Banjarsari, Surakarta.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas Surakarta adalah pranata untuk melaksanakan bimbingan dan Pendampingan terhadap Klien Pemasyarakatan di Kementrian Hukum dan Hak Asasi Manusia yang berada di Wilayah kerja Kantor Wilayah Kementerian Hukum dan HAM Jawa Tengah. Wilayah kerja Bapas Surakarta meliputi: Solo, Boyolali, Karanganyar dan Sragen.
                  </p>

                  {/* Info Box */}
                  <div className="bg-blue-50 p-6 rounded-lg mt-8 border border-blue-200">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Informasi Penting
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Didirikan berdasarkan Keputusan Menteri Kehakiman RI Tahun 1987</li>
                      <li>Berubah nama menjadi Bapas berdasarkan UU No. 12 Tahun 1995</li>
                      <li>Merupakan satu dari 90 UPT Bapas di Indonesia</li>
                      <li>Wilayah kerja: Solo, Boyolali, Karanganyar, dan Sragen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TentangPage;