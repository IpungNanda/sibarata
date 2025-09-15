"use client";

import { motion } from "framer-motion";
import { FiUsers, FiClipboard, FiUserCheck } from "react-icons/fi";

interface StatistikCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const StatistikCard = ({ title, value, icon, color, delay = 0 }: StatistikCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border border-gray-100 hover:shadow-xl transition"
    >
      <div className={`p-4 rounded-xl ${color} bg-opacity-10`}>
        <div className={`text-2xl ${color.replace("bg", "text")}`}>{icon}</div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </motion.div>
  );
};

export default function StatistikSection() {
  // Bisa diisi dari API / Firestore
  const data = [
    {
      title: "Jumlah Litmas",
      value: 120,
      icon: <FiClipboard />,
      color: "bg-blue-500",
    },
    {
      title: "Jumlah Bimbingan Klien",
      value: 85,
      icon: <FiUsers />,
      color: "bg-green-500",
    },
    {
      title: "Jumlah Petugas Survey",
      value: 30,
      icon: <FiUserCheck />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mb-4 text-center"
      >
        Statistik Sibarata
      </motion.h2>
           <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
           <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Temukan berbagai informasi penting dan pengumuman resmi.
          </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <StatistikCard
            key={idx}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
            delay={idx * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
