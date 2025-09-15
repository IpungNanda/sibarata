import Link from 'next/link';
import { FiBookOpen, FiUsers, FiTarget, FiArrowRight, FiBook, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';


const CorporateUniversityPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  const features = [
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Fokus Strategis",
      description: "Berfokus pada program strategis Kementerian Hukum dan HAM"
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Ekosistem Pembelajar",
      description: "Mengelola individu pegawai dalam organisasi pembelajar"
    },
    {
      icon: <FiBook className="text-2xl" />,
      title: "Pengelolaan Pengetahuan",
      description: "Manajemen pengetahuan untuk pencapaian karakter unggul"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Spesialisasi Pelatihan",
      description: "Pengembangan berbasis kebutuhan nyata organisasi"
    }
  ];

  const changes = [
    {
      title: "Desain Pengembangan SDM",
      description: "Perubahan mendasar dalam perencanaan pengembangan sumber daya manusia"
    },
    {
      title: "Analisis Kebutuhan Pembelajaran",
      description: "Pendekatan berbasis isu strategis organisasi"
    },
    {
      title: "Sinergi Organisasi",
      description: "Keterlibatan semua pihak dalam perumusan program"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Learning Council Meeting",
      description: "Rapat pimpinan tertinggi mengidentifikasi kebutuhan pengembangan"
    },
    {
      step: "2",
      title: "Analisis Kebutuhan",
      description: "Berdasarkan isu strategis organisasi yang diputuskan manajemen"
    },
    {
      step: "3",
      title: "Cetak Biru Pengembangan",
      description: "Perencanaan program pengembangan untuk tahun berikutnya"
    },
    {
      step: "4",
      title: "Implementasi & Evaluasi",
      description: "Pelaksanaan program dan reformulasi melalui evaluasi"
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
            <span>Corporate University</span>
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
                        item.href === '/tentang/corporate-university' 
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
                  <FiBookOpen className="text-3xl mr-4" />
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Corporate University</h1>
                    <p className="text-blue-100">Kumham CorpU - Strategi Pengembangan SDM Kementerian Hukum dan HAM</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Introduction Section */}
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>Kumham CorpU</strong> merupakan manajemen strategis pengembangan SDM yang fokus pada program strategis Kementerian, dengan mengelola individu pegawai dalam ekosistem organisasi pembelajar, serta pengelolaan pengetahuan untuk pencapaian karakter unggul di bidang Hukum dan HAM.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                    <p className="text-gray-700 italic">
                      Corporate University bukan lembaga atau institusi pendidikan dan pelatihan yang menempel (embedded), melainkan strategi manajemen agar terjadi pembelajaran individu dan pembelajaran dalam organisasi, serta pengelolaan pengetahuan individu dan pengetahuan strategis organisasi.
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Ecosystem Section */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Ekosistem Organisasi Pembelajar</h3>
                  <p className="text-gray-700 mb-4">
                    Pembentukan ekosistem organisasi pembelajar memberikan kesempatan bagi seluruh komponen untuk belajar setiap saat dan mengembangkan diri untuk memenuhi standarisasi potensi atau talenta.
                  </p>
                  <div className="flex items-center text-green-700">
                    <FiArrowRight className="mr-2" />
                    <span className="font-medium">Transformasi menuju learning organization</span>
                  </div>
                </div>

                {/* Paradigm Changes */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Paradigma Baru CorpU</h2>
                  <p className="text-gray-700 mb-6">
                    Paradigma CorpU berdampak pada 3(tiga) perubahan yang menonjol:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {changes.map((change, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{change.title}</h3>
                        <p className="text-gray-600 text-sm">{change.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comparison Section */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Perbedaan Pendekatan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Lembaga Pendidikan Tradisional</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">-</span>
                          <span>Fokus pada pemenuhan kesenjangan kompetensi individu</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">-</span>
                          <span>Pendekatan top-down</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-yellow-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">-</span>
                          <span>Posisi sebagai pelaksana kegiatan</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Corporate University</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">+</span>
                          <span>Fokus pada pencapaian strategis organisasi</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">+</span>
                          <span>Berdasarkan analisis kebutuhan strategis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mr-2 mt-1">+</span>
                          <span>Semua pihak terlibat dalam perumusan program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Proses Pengembangan CorpU</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {processSteps.map((step, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-3">
                          {step.step}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-xs">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsibility Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Tanggung Jawab CorpU</h3>
                  <p className="text-gray-700 mb-4">
                    Corporate University bertanggungjawab untuk dapat memastikan semua pegawai belajar dan mempelajari hal-hal secara benar, dengan cara penyampaian pembelajaran yang benar.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiGlobe className="text-blue-600 mr-2" />
                        <span className="font-semibold">Memperoleh Sumber Pengetahuan</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiBook className="text-blue-600 mr-2" />
                        <span className="font-semibold">Mendokumentasikan Pengetahuan</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiShield className="text-blue-600 mr-2" />
                        <span className="font-semibold">Mendistribusikan & Menerapkan</span>
                      </div>
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

export default CorporateUniversityPage;