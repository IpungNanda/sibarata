'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gray-50 text-gray-900">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            {/* Logo Style Text */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <h1 className="text-4xl font-bold text-blue-800">
                  IBARATA
                </h1>
              </div>
              <p className="text-gray-600 text-sm mt-2 font-light">
                Sistem Informasi Bapas Surakarta
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Selamat Datang di Portal
              <span className="text-blue-600"> Layanan Terpadu</span>
            </h2>
            
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sistem informasi terintegrasi untuk memberikan pelayanan terbaik 
              bagi masyarakat Bapas Surakarta. Akses berbagai layanan dengan mudah 
              dan cepat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#layanan'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center mx-auto shadow-md hover:shadow-lg"
            >
              Mulai Jelajahi
              <FiArrowRight className="ml-2" />
            </motion.button>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Akses 24 Jam</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Layanan Digital</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Informasi Terupdate</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Layanan Tersedia</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Layanan Online</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Terintegrasi</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;