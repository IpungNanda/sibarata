import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

interface Pimpinan {
  id: number;
  nama: string;
  jabatan: string;
  foto: string;
  pendidikan: string;
  pengalaman: string;
  prestasi: string;
}

const PimpinanProfilPage = () => {
  const pimpinanData: Pimpinan[] = [
    {
      id: 1,
      nama: "Dr. John Doe, S.H., M.H.",
      jabatan: "Kepala Bapas Kelas I Surakarta",
      foto: "/placeholder-profile.jpg",
      pendidikan: "S1 Hukum Universitas Indonesia, S2 Hukum Universitas Gadjah Mada",
      pengalaman: "15 tahun pengalaman di bidang pemasyarakatan",
      prestasi: "Penghargaan Pelayanan Terbaik Kemenkumham 2022"
    },
    {
      id: 2,
      nama: "Jane Smith, S.Psi., M.Psi.",
      jabatan: "Wakil Kepala Bapas Kelas I Surakarta",
      foto: "/placeholder-profile2.jpg",
      pendidikan: "S1 Psikologi Universitas Airlangga, S2 Psikologi Universitas Indonesia",
      pengalaman: "12 tahun pengalaman di bidang bimbingan klien pemasyarakatan",
      prestasi: "Inovator Program Rehabilitasi Terbaik 2021"
    }
  ];

  const sidebarItems = [
    { title: 'Profil Pejabat', href: '/pimpinan/profil' },
    { title: 'Sambutan Kapala Satuan Kerja', href: '/pimpinan/sambutan' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-blue-800 text-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pimpinan Satuan Kerja</h1>
          <nav className="text-sm text-blue-100">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/pimpinan" className="hover:text-white transition-colors">Pimpinan Satuan Kerja</Link>
            <span className="mx-2">/</span>
            <span>Profil Pejabat</span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Pimpinan Satuan Kerja</h2>
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        item.href === '/pimpinan/profil' 
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
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Profil Pejabat Bapas Kelas I Surakarta</h2>
                
                <div className="space-y-12">
                  {pimpinanData.map((pimpinan) => (
                    <div key={pimpinan.id} className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="relative w-48 h-56">
                          <Image
                            src={pimpinan.foto}
                            alt={pimpinan.nama}
                            fill
                            className="object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{pimpinan.nama}</h3>
                        <p className="text-blue-600 font-medium mb-4">{pimpinan.jabatan}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">Pendidikan</h4>
                            <p className="text-gray-600">{pimpinan.pendidikan}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">Pengalaman Kerja</h4>
                            <p className="text-gray-600">{pimpinan.pengalaman}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">Prestasi</h4>
                            <p className="text-gray-600">{pimpinan.prestasi}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PimpinanProfilPage;