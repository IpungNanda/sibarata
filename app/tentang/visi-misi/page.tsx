import Link from 'next/link';
import { FiTarget, FiList, FiStar, FiCheckCircle, FiUsers, FiEye,  FiShield } from 'react-icons/fi';
import { GiDeadlyStrike } from "react-icons/gi";

const VisiMisiPage = () => {
  const sidebarItems = [
    { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
    { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
    { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
    { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
    { title: 'Corporate University', href: '/tentang/corporate-university' },
    { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
  ];

  const misiItems = [
    "Mewujudkan peraturan Perundang-Undangan yang berkualitas",
    "Mewujudkan pelayanan hukum yang berkualitas",
    "Mewujudkan penegakan hukum yang berkualitas",
    "Mewujudkan penghormatan, pemenuhan, dan perlindungan HAM",
    "Mewujudkan layanan manajemen administrasi Kementerian Hukum dan HAM",
    "Mewujudkan aparatur Kementerian Hukum dan HAM yang profesional dan berintegritas"
  ];

  const tataNilaiItems = [
    {
      icon: <FiShield className="text-2xl text-[#1c2c66]" />,
      initial: "P",
      title: "Profesional",
      description: "Aparatur Kementerian Hukum dan HAM adalah aparat yang bekerja keras untuk mencapai tujuan organisasi melalui penguasaan bidang tugasnya, menjunjung tinggi etika dan integritas profesi"
    },
    {
      icon: <FiCheckCircle className="text-2xl text-[#1c2c66]" />,
      initial: "A",
      title: "Akuntabel",
      description: "Setiap kegiatan dalam rangka penyelenggaraan pemerintah dapat dipertanggungjawabkan kepada masyarakat sesuai dengan ketentuan atau peraturan yang berlaku"
    },
    {
      icon: <FiUsers className="text-2xl text-[#1c2c66]" />,
      initial: "S",
      title: "Sinergi",
      description: "Komitmen untuk membangun dan memastikan hubungan kerjasama yang produktif serta kemitraan yang harmonis dengan para pemangku kepentingan untuk menemukan dan melaksanakan solusi terbaik, bermanfaat, dan berkualitas"
    },
    {
      icon: <FiEye className="text-2xl text-[#1c2c66]" />,
      initial: "T",
      title: "Transparan",
      description: "Kementerian Hukum dan HAM menjamin akses atau kebebasan bagi setiap orang untuk memperoleh informasi tentang penyelenggaraan pemerintahan, yakni informasi tentang kebijakan, proses pembuatan dan pelaksanaannya, serta hasil-hasil yang dicapai"
    },
    {
      icon: <GiDeadlyStrike className="text-2xl text-[#1c2c66]" />,
      initial: "I",
      title: "Inovatif",
      description: "Kementerian Hukum dan HAM mendukung kreatifitas dan mengembangkan inisiatif untuk selalu melakukan pembaharuan dalam penyelenggaraan tugas dan fungsinya"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">   
      <header className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tentang Satuan Kerja</h1>
          <nav className="text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/tentang" className="hover:text-white transition-colors">Tentang Satuan Kerja</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Visi, Misi dan Tata Nilai</span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#1c2c66] mb-4">Tentang Satuan Kerja</h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        item.href === '/tentang/visi-misi' 
                          ? 'bg-[#f8cb8b]/20 text-[#1c2c66] font-medium' 
                          : 'text-gray-700 hover:bg-[#f8cb8b]/10 hover:text-[#1c2c66]'
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">Visi, Misi dan Tata Nilai</h1>
                <p className="text-gray-300">Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia</p>
              </div>

              <div className="p-8">
                {/* Visi Section */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f8cb8b]/20 p-3 rounded-full mr-4">
                      <FiTarget className="text-2xl text-[#1c2c66]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1c2c66]">VISI</h2>
                  </div>
                  
                  <div className="bg-[#f8cb8b]/20 border-l-4 border-[#1c2c66] p-6 rounded-r-lg">
                    <p className="text-2xl font-semibold text-[#1c2c66] italic text-center">
                      "Masyarakat memperoleh kepastian hukum"
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mt-4 text-center">
                    Visi ini menjadi pedoman dan arah bagi seluruh jajaran Kementerian Hukum dan HAM 
                    dalam melaksanakan tugas dan fungsi untuk memberikan kepastian hukum bagi masyarakat.
                  </p>
                </div>

                {/* Misi Section */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f8cb8b]/20 p-3 rounded-full mr-4">
                      <FiList className="text-2xl text-[#1c2c66]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1c2c66]">MISI</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {misiItems.map((misi, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-[#1c2c66] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{misi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tata Nilai Section */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-[#f8cb8b]/20 p-3 rounded-full mr-4">
                      <FiStar className="text-2xl text-[#1c2c66]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1c2c66]">TATA NILAI</h2>
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-[#1c2c66] to-[#2a3b7a] inline-block text-white text-4xl font-bold py-4 px-8 rounded-lg shadow-sm">
                      P-A-S-T-I
                    </div>
                    <p className="text-gray-600 mt-2">Kementerian Hukum dan HAM menjunjung tinggi tata nilai kami "P-A-S-T-I"</p>
                  </div>

                  <div className="space-y-6">
                    {tataNilaiItems.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <div className="flex items-start mb-4">
                          <div className="bg-[#1c2c66] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                            {item.initial}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[#1c2c66]">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementasi Section */}
                <div className="mt-12 bg-[#f8cb8b]/20 border-l-4 border-[#1c2c66] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-[#1c2c66] mb-2">Implementasi dalam Pelayanan</h3>
                  <p className="text-gray-600">
                    Visi, Misi, dan Tata Nilai Kementerian Hukum dan HAM ini diimplementasikan 
                    dalam setiap layanan yang diberikan oleh Bapas Kelas I Surakarta kepada masyarakat, 
                    ensuring professional, accountable, synergistic, transparent, and innovative services.
                  </p>
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

export default VisiMisiPage;