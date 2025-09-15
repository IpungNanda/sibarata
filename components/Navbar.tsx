'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiInfo, FiUser } from 'react-icons/fi';

interface SubMenu {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface MenuItem {
  title: string;
  href?: string;
  submenu?: SubMenu[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { title: 'Beranda', href: '/' },
    {
      title: 'Profile',
      submenu: [
        { title: 'Sejarah Pemasyarakatan', href: '/tentang' },
        { title: 'Kedudukan, Tugas dan Fungsi', href: '/tentang/tugas-fungsi' },
        { title: 'Visi, Misi dan Tata Nilai', href: '/tentang/visi-misi' },
        { title: 'Mars Pemasyarakatan', href: '/tentang/mars' },
        { title: 'Corporate University', href: '/tentang/corporate-university' },
        { title: 'Sarana dan Prasarana', href: '/tentang/sarana-prasarana' },
        { 
          title: 'PIMPINAN SATUAN KERJA', 
          href: '#',
          icon: <FiUser className="mr-2" />
        },
        { title: 'Profil Pejabat', href: '/pimpinan/profil' },
        { title: 'Sambutan Kapala Satuan Kerja', href: '/pimpinan/sambutan' },
        { 
          title: 'KEPALA UNIT SATUAN KERJA', 
          href: '#',
          icon: <FiUser className="mr-2" />
        },
      ]
    },
    { title: 'Berita', href: '#berita' },
    { 
      title: 'Layanan',
      submenu: [
        { title: 'Maklumat Pelayanan', href: '/layanan/maklumat' },
        { title: 'Jangkauan Layanan', href: '/layanan/jangkauan' },
        { title: 'Kompensasi Pelayanan', href: '/layanan/kompensasi' },
        { title: 'Standar Pelayanan', href: '/layanan/standar' },
      ]
    },
    { title: 'Informasi', href: '#informasi' },
    { title: 'Produk Hukum', href: '/produk-hukum' },
  ];

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Sibarata Logo"
                width={1200}
                height={1200}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
                  >
                    {item.title}
                    <FiChevronDown className={`ml-1 transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} />
                  </button>
                )}
                
                {item.submenu && openSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200"
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm transition-colors"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {subItem.title}
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="w-full flex justify-between items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium"
                      >
                        <span>{item.title}</span>
                        <FiChevronDown className={`transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {item.submenu && openSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pl-6 space-y-1 border-l-2 border-blue-200 ml-4 mt-1"
                        >
                          {item.submenu.map((subItem) => (
                            <div key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;