import Link from 'next/link';
import Image from 'next/image';
import Gedung from '@/public/image.png'

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
      <header className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] text-white pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#f8cb8b]/20 rounded-lg flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-[#f8cb8b]">S</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Tentang Satuan Kerja</h1>
              <p className="text-gray-300 mt-1">Sistem Informasi Bapas Surakarta</p>
            </div>
          </div>
          
          <nav className="text-sm text-gray-300 flex items-center">
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
              <h2 className="text-lg font-semibold text-[#1c2c66] mb-4 pb-2 border-b border-gray-200">
                Tentang Satuan Kerja
              </h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className={`block py-2 px-3 rounded-md transition-colors text-sm ${
                        item.href === '/tentang' 
                          ? 'bg-[#f8cb8b]/20 text-[#1c2c66] font-medium border-l-4 border-[#1c2c66]' 
                          : 'text-gray-600 hover:bg-[#f8cb8b]/10 hover:text-[#1c2c66]'
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c2c66]/90 to-[#2a3b7a]/90 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Sejarah Pemasyarakatan</h2>
                    <p className="text-gray-300">Perjalanan panjang sistem pemasyarakatan di Indonesia</p>
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
                        src={Gedung}
                        alt="Gedung Bapas Lama"
                        fill
                        className="object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Namun sesuai perkembangan kondisi, tugas dan fungsi berdasarkan Undang-Undang Nomor: 12 tahun 1995 tentang Pemasyarakatan, istilah Bispa diganti menjadi Bapas.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1c2c66] mt-8 mb-4 border-b border-gray-200 pb-2">
                    Bapas Kelas I Surakarta
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas Kelas I Surakarta (Bapas Surakarta) adalah satu dari 90 UPT Bapas yang ada di Indonesia. UPT ini berada di bawah Kantor Wilayah Kementerian Hukum dan Hak Asasi Manusia Jawa Tengah dan berkedudukan di JL. Rm. Said No. 259 Manahan, Banjarsari, Surakarta.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Bapas Surakarta adalah pranata untuk melaksanakan bimbingan dan Pendampingan terhadap Klien Pemasyarakatan di Kementrian Hukum dan Hak Asasi Manusia yang berada di Wilayah kerja Kantor Wilayah Kementerian Hukum dan HAM Jawa Tengah. Wilayah kerja Bapas Surakarta meliputi: Solo, Boyolali, Karanganyar dan Sragen.
                  </p>

                  {/* Info Box */}
                  <div className="bg-[#f8cb8b]/20 p-6 rounded-lg mt-8 border border-[#f8cb8b]/30">
                    <h4 className="text-lg font-semibold text-[#1c2c66] mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#1c2c66] rounded-full mr-2"></span>
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