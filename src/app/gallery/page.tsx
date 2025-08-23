"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const galleryItems = [
  {
    src: "/monty-bike.jpg",
    alt: "Daytona Nights – 2024",
    caption: "Daytona Nights – 2024",
  },
  {
    src: "/monty-bike.jpg",
    alt: "Florida Backroads",
    caption: "Florida Backroads",
  },
  {
    src: "/monty-bike.jpg",
    alt: "Iron Egg – 1100cc",
    caption: "Iron Egg – 1100cc",
  },
  {
    src: "/monty-bike.jpg",
    alt: "Daytona Nights – 2024",
    caption: "Daytona Nights – 2024",
  },
  {
    src: "/monty-bike.jpg",
    alt: "Florida Backroads",
    caption: "Florida Backroads",
  },
  {
    src: "/monty-bike.jpg",
    alt: "Iron Egg – 1100cc",
    caption: "Iron Egg – 1100cc",
  },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleNext = () => {
    if (selected !== null) setSelected((selected + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selected !== null)
      setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <Head>
        <title>Gallery – Monty & The Iron Egg</title>
        <meta
          name="description"
          content="Snapshots from the road. Explore the world through Monty's lens."
        />
      </Head>

      <section className="min-h-screen bg-white text-black px-6 py-32 overflow-hidden">
        {/* subtle diagonal stripes */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(45deg,#00000005_0px,#00000005_20px,transparent_20px,transparent_40px)]"></div>

        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-red-600 uppercase tracking-wider relative z-10">
          Photo Gallery
        </h1>

        {/* Polaroid-style cards */}
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto relative z-10">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="bg-white w-[350px] sm:w-[280px] mx-auto rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden flex flex-col cursor-pointer border border-gray-200"
              onClick={() => setSelected(i)}
            >
              <div className="aspect-square overflow-hidden border-b border-gray-300 m-2 rounded-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center text-sm italic text-gray-700">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="modal"
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative max-w-3xl w-full max-h-[90vh] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <Image
                  src={galleryItems[selected].src}
                  alt={galleryItems[selected].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
                <p className="text-center text-gray-800 italic mt-4">
                  {galleryItems[selected].caption}
                </p>
                {/* Controls */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-900 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow"
                >
                  <X size={24} />
                </button>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-900 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-900 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
