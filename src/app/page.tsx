"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monty & The Iron Egg | Moto Vlog</title>
        <meta
          name="description"
          content="A cinematic moto vlog chasing the road with Monty and the Iron Egg. Travel. Stories. Motion."
        />
      </Head>

      <main className="min-h-screen bg-white text-black font-sans tracking-tight">
        {/* 🎥 Hero Section */}
        <motion.section
          className="relative flex flex-col justify-center items-center h-[90vh] text-center px-4 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="../EggIntro2.mp4" type="video/mp4" />
          </video>

          {/* Industrial Overlay */}
          <div className="absolute inset-0 bg-white/40 mix-blend-multiply z-0" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase mb-6 tracking-tight text-white">
              Monty & The Iron Egg
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-8 italic">
              Travel the road. Tell the story. Ride the machine.
            </p>

            {/* Off-White Style CTA */}
            <motion.a
              href="https://www.youtube.com/@YourChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 text-lg font-bold uppercase bg-white text-black border-4 border-black group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-yellow-300 transform -skew-x-12 -z-10 transition group-hover:bg-red-500"></span>
              Watch on YouTube →
            </motion.a>
          </div>
        </motion.section>

        {/* 🎬 Featured Video Section */}
        <motion.section
          className="relative bg-white py-16 px-4 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* diagonal stripes overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-full opacity-35 bg-white bg-[repeating-linear-gradient(135deg,#00000015_0px,#00000015_20px,transparent_20px,transparent_40px)] rounded-2xl" />

          <h2 className="text-3xl md:text-4xl font-semibold text-center  relative z-10">
            Latest Ride
          </h2>

          <motion.div
            className="flex justify-center relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full max-w-4xl aspect-video rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Latest YouTube Ride"
              allowFullScreen
            />
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}
