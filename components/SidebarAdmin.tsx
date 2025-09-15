'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiFileText, 
  FiSettings, 
  FiInfo, 
  FiBook, 
  FiLogOut 
} from 'react-icons/fi';

const SidebarAdmin = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: <FiHome /> },
    { href: '/admin/berita', label: 'Berita', icon: <FiFileText /> },
    { href: '/admin/layanan', label: 'Layanan', icon: <FiSettings /> },
    { href: '/admin/informasi', label: 'Informasi Publik', icon: <FiInfo /> },
    { href: '/admin/produk-hukum', label: 'Produk Hukum', icon: <FiBook /> },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out md:relative">
      <div className="text-white flex items-center space-x-2 px-4">
        <h1 className="text-xl font-bold">Admin Sibarata</h1>
      </div>

      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 py-3 px-4 rounded transition duration-200 ${
              pathname === item.href
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarAdmin;