"use client";

import { motion } from "framer-motion";
import { FiFacebook, FiX, FiLinkedin, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Jangkauan from "@/public/jangkauan_layanan.jpeg";

const JangkauanLayananPage = () => {
  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tombol Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition"
          >
            <FiArrowLeft className="mr-2" /> Kembali ke Home
          </Link>
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          JANGKAUAN LAYANAN
        </motion.h1>

        {/* Breadcrumb & share */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-600 border-b pb-4 mb-6">
          <p>
            Pusdatin / Berita Utama /{" "}
            <span className="text-gray-500">05 September 2024</span> / Hits: 52
          </p>
          <div className="flex space-x-3 mt-3 md:mt-0">
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
            >
              <FiFacebook className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
            >
              <FiX className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
            >
              <FiLinkedin className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>

        {/* Gambar konten */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-lg overflow-hidden shadow"
        >
          <Image
            src={Jangkauan}
            alt="Jangkauan Layanan"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JangkauanLayananPage;
