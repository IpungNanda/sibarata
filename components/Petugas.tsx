"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiUsers, FiClipboard, FiUserCheck } from "react-icons/fi";

interface StatistikData {
  litmas: number;
  bimbingan: number;
  petugas: number;
}

const StatistikCard = ({ title, value, icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
  >
    <div className="p-4 rounded-xl bg-[#f8cb8b]/20">
      <div className="text-2xl text-[#1c2c66]">{icon}</div>
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-[#1c2c66]">{value}</p>
    </div>
  </motion.div>
);

export default function StatistikSection() {
  const [data, setData] = useState<StatistikData>({ litmas: 0, bimbingan: 0, petugas: 0 });

  const fetchData = async () => {
    try {
      const res = await fetch("/api/statistik");
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.error("Gagal ambil data:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Jumlah Litmas", value: data.litmas, icon: <FiClipboard /> },
    { title: "Jumlah Bimbingan Klien", value: data.bimbingan, icon: <FiUsers /> },
    { title: "Jumlah Petugas Survey", value: data.petugas, icon: <FiUserCheck /> },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#1c2c66] mb-4">Statistik Sibarata</h2>
        <div className="w-24 h-1 bg-[#f8cb8b] mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Data terkini mengenai layanan dan aktivitas Bapas Surakarta.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, idx) => (
          <StatistikCard key={idx} {...item} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  );
}