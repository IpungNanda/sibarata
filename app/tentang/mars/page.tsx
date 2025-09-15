import Link from 'next/link';
import { FiMusic, FiPlay, FiPause, FiDownload } from 'react-icons/fi';


const MarsPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  const lirikMars = [
    {
      bait: 1,
      lirik: `Kami petugas pemasyarakatan
Sebagai penegak hukum
Mengayom sesama insan
Tegakkan Hak Asasi Manusia`
    },
    {
      bait: 2,
      lirik: `Ikhlas mengabdi pada masyarakat
Mengemban tugas mulia
Membina pelanggar hukum
Dengan berlandaskan pancasila`
    },
    {
      bait: 3,
      lirik: `Kobarkan semangatmu tuk melawan tantangan
Pantang mundur hadapi cobaan
Jadikan teladan
Pancarkan wibawa
Dibawah panji pengayoman`
    },
    {
      bait: 4,
      lirik: `Berlandaskan etos kerja tri darma
Turut bangun negara
Mewujudkan cita-cita
Masyarakat yang adil dan makmur`
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
            <span>Mars Pemasyarakatan</span>
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
                        item.href === '/tentang/mars' 
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
                  <FiMusic className="text-3xl mr-4" />
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Mars Pemasyarakatan</h1>
                    <p className="text-blue-100">Lagu Kebangsaan Petugas Pemasyarakatan Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Lirik Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Lirik Mars Pemasyarakatan</h2>
                  
                  <div className="space-y-8">
                    {lirikMars.map((bait, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-start mb-4">
                          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                            {bait.bait}
                          </div>
                          <div className="flex-1">
                            <pre className="text-gray-800 whitespace-pre-wrap font-sans text-lg leading-relaxed">
                              {bait.lirik}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Makna dan Sejarah */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Makna Mars Pemasyarakatan</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">1</span>
                        <span>Menggambarkan semangat pengabdian petugas pemasyarakatan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">2</span>
                        <span>Menegaskan komitmen dalam penegakan hukum dan HAM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">3</span>
                        <span>Mencerminkan nilai-nilai Pancasila dalam pembinaan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">4</span>
                        <span>Menunjukkan tekad mewujudkan masyarakat adil dan makmur</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Penggunaan Mars</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">•</span>
                        <span>Upacara bendera dan acara resmi pemasyarakatan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">•</span>
                        <span>Pembukaan kegiatan pembinaan dan pelatihan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">•</span>
                        <span>Acara kenegaraan dan hukum terkait</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-1">•</span>
                        <span>Peringatan hari-hari besar pemasyarakatan</span>
                      </li>
                    </ul>
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

export default MarsPage;