'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiLayers, FiRefreshCw } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '@/public/logo.png'

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-white to-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c2c66] rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f8cb8b] rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            {/* Logo Style Text */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image
                 src={Logo} // ganti sesuai nama file logo kamu
                  alt="Logo SIBARATA"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-base mt-2 font-light tracking-wide">
                Sistem Informasi Bapas Surakarta
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Selamat Datang di Portal
              <span className="text-[#1c2c66] block mt-2">Layanan Terpadu</span>
            </h2>
            
            <div className="w-32 h-1.5 bg-[#f8cb8b] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sistem informasi terintegrasi untuk memberikan pelayanan terbaik 
              bagi masyarakat Bapas Surakarta. Akses berbagai layanan dengan mudah 
              dan cepat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(28, 44, 102, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '#layanan'}
              className="bg-[#1c2c66] text-white px-10 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl text-lg"
            >
              Mulai Jelajahi
              <FiArrowRight className="ml-3 text-xl" />
            </motion.button>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-[#f8cb8b] rounded-full mr-3"></div>
                <span className="text-sm text-gray-600 font-medium">Akses 24 Jam</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-[#f8cb8b] rounded-full mr-3"></div>
                <span className="text-sm text-gray-600 font-medium">Layanan Digital</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-[#f8cb8b] rounded-full mr-3"></div>
                <span className="text-sm text-gray-600 font-medium">Informasi Terupdate</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f8cb8b]/20 rounded-full mb-5">
              <FiLayers className="text-2xl text-[#1c2c66]" />
            </div>
            <div className="text-3xl font-bold text-[#1c2c66] mb-3">10+</div>
            <div className="text-gray-600 font-medium">Layanan Tersedia</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f8cb8b]/20 rounded-full mb-5">
              <FiClock className="text-2xl text-[#1c2c66]" />
            </div>
            <div className="text-3xl font-bold text-[#1c2c66] mb-3">24/7</div>
            <div className="text-gray-600 font-medium">Layanan Online</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f8cb8b]/20 rounded-full mb-5">
              <FiRefreshCw className="text-2xl text-[#1c2c66]" />
            </div>
            <div className="text-3xl font-bold text-[#1c2c66] mb-3">100%</div>
            <div className="text-gray-600 font-medium">Terintegrasi</div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-20 left-10 w-6 h-6 bg-[#f8cb8b] rounded-full opacity-40"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-40 right-16 w-8 h-8 bg-[#1c2c66] rounded-full opacity-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#f8cb8b] rounded-full opacity-30"
      ></motion.div>
    </section>
  );
};

export default Hero;