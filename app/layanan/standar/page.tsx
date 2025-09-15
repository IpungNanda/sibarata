"use client";

import { motion } from "framer-motion";

const LayananStandar = () => {
  // link PDF dari Google Drive → pakai /preview untuk embed, dan FILE_ID untuk download
  const pdfs = [
    {
      title: "SK_Standar_Pelayanan_Inovasi.pdf",
      preview: "https://drive.google.com/file/d/1VqA-X2OOSRA5xOXADwRoutZNrJtu_bq_/preview", // ganti FILE_ID
      download: "https://drive.google.com/uc?export=download&id=1VqA-X2OOSRA5xOXADwRoutZNrJtu_bq_",
    },
    {
      title: "SK_Penetapan_Standar_Pelayanan_Umum.pdf",
      preview: "https://drive.google.com/file/d/15lj-JEFsqBTmtzAZUanEre5hoktj4OQ-/preview", // ganti FILE_ID
      download: "https://drive.google.com/uc?export=download&id=15lj-JEFsqBTmtzAZUanEre5hoktj4OQ-",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      {/* Judul Halaman */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-2"
      >
        Standar Pelayanan
      </motion.h2>

      {/* Meta Info */}
      <div className="text-sm text-gray-500 mb-6">
        <span>admin pas</span> / <span>SOP</span> /{" "}
        <span>29 August 2024</span> / <span>Hits: 80</span>
      </div>

      {/* Loop PDF List */}
      {pdfs.map((doc, idx) => (
        <div key={idx} className="mb-10">
          {/* Link nama file */}
          <a
            href={doc.download}
            className="text-red-600 hover:underline block mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {doc.title}
          </a>

          {/* Embed PDF */}
          <div className="w-full h-[80vh] rounded-md border shadow">
            <iframe
              src={doc.preview}
              className="w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayananStandar;
