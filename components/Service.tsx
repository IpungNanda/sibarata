'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import * as Icons from 'react-icons/fi';

interface Layanan {
  id: string;
  nama: string;
  deskripsi: string;
  icon: string;
  link: string;
}

const Services = () => {
  const [layanan, setLayanan] = useState<Layanan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const response = await fetch('/api/layanan');
        const data = await response.json();
        
        if (data.success) {
          setLayanan(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch layanan:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLayanan();
  }, []);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <Icons.FiSettings className="w-6 h-6" />;
  };

  if (loading) {
    return (
      <section id="layanan" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c2c66] mb-4">Layanan</h2>
            <div className="w-24 h-1 bg-[#f8cb8b] mx-auto mb-6 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-64 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1c2c66] mb-4">Layanan</h2>
          <div className="w-24 h-1 bg-[#f8cb8b] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Akses berbagai layanan publik yang tersedia untuk masyarakat dengan mudah dan cepat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layanan.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-[#f8cb8b]/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f8cb8b]/30 transition-colors">
                {getIconComponent(item.icon)}
              </div>
              
              <h3 className="text-lg font-semibold text-[#1c2c66] mb-3">
                {item.nama}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.deskripsi}
              </p>
              
              <a
                href={item.link}
                className="text-[#1c2c66] hover:text-[#1c2c66]/80 font-medium text-sm flex items-center justify-center transition-colors group-hover:underline"
              >
                Akses Layanan
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;