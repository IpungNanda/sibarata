import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Widyo from '@/public/widyo.jpg';

const SambutanPage = () => {
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
            <span>Sambutan Kapala Satuan Kerja</span>
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
                        item.href === '/pimpinan/sambutan' 
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
              {/* Header with Image */}
              <div className="relative h-64 w-full">
                <Image
                    src={Widyo}
                    alt="Sambutan Kapala Satuan Kerja"
                    fill
                    className="object-cover"
                    priority
                    />
                <div className="absolute inset-0 bg-blue-800 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">Sambutan Kapala Satuan Kerja</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="prose max-w-none">
                  <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                        <Image
                            src={Widyo}
                            alt="Sambutan Kapala Satuan Kerja"
                            fill
                            className="object-cover"
                            priority
                            />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Unggul Widiyo Saputro</h3>
                      <p className="text-blue-600 font-medium">Kepala Bapas Kelas I Surakarta</p>
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-700">
                    <p>
                      Perkembangan teknologi informasi yang terus meningkat mengharuskan kita melakukan pengembangan sistem informasi secara menyeluruh, baik di tingkat pusat maupun di tingkat daerah yang meliputi Kantor Wilayah dan Satuan Kerja dibawahnya. Dukungan dari segi sumber daya manusia dan infrastruktur juga sangat mempengaruhi dalam menunjang kelancaran pengembangan teknologi informasi tersebut.
                    </p>

                    <p>
                      Sejalan dengan pengembangan dan penguatan tata kelola teknologi informasi di Lingkungan Kementerian Hukum dan HAM, Pusat Data dan Teknologi Informasi Kementerian Hukum dan HAM R.I terus meningkatkan kinerja berbasis teknologi dengan pemanfaatan dan pengembangan Teknologi Informasi melalui pembuatan laman resmi satuan kerja di lingkungan Kementerian Hukum dan HAM.
                    </p>

                    <p>
                      Kepada pihak yang telah terlibat dalam proses development laman resmi satuan kerja di lingkungan Kementerian Hukum dan HAM, saya ucapkan terima kasih yang sebesar-besarnya. Semoga laman ini dapat menjadi media publikasi bagi pejabat administrator, Pengawas, Pemangku Jabatan Fungsional dan seluruh pegawai satuan kerja di lingkungan Kementerian Hukum dan HAM pada umumnya dalam mendukung keterbukaan informasi publik dengan cara mempublikasikan seluruh informasi kepada masyarakat luas melalui laman ini.
                    </p>

                    <div className="border-t pt-6 mt-6">
                      <p className="text-gray-600">Wassalamualaikum, Wr, Wb.</p>
                      <p className="text-lg font-semibold text-gray-800 mt-2">Unggul Widiyo Saputro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Visi dan Misi Bapas Kelas I Surakarta</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Visi</h4>
                  <p className="text-gray-700">
                    Terwujudnya Pelayanan Pemasyarakatan yang Profesional dan Bermartabat untuk Mendukung Sistem Peradilan Pidana Terpadu.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Misi</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Melaksanakan pembimbingan klien pemasyarakatan</li>
                    <li>Meningkatkan kualitas sumber daya manusia</li>
                    <li>Mengembangkan sistem manajemen informasi</li>
                    <li>Memperkuat jejaring kemitraan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SambutanPage;