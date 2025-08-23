"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About – Monty & The Iron Egg</title>
        <meta
          name="description"
          content="Learn the story behind Monty and the Iron Egg — a cinematic moto vlog chasing freedom, speed, and silence."
        />
      </Head>

      {/* The Story So Far */}
      <motion.section
        className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white px-6 py-32  overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Diagonal stripes background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,#ffffff15_0px,#ffffff15_20px,transparent_20px,transparent_40px)]"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-600 uppercase tracking-wide">
            The Story So Far
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed">
            <em>Monty & The Iron Egg</em> isn&apos;t just a motovlog. It&apos;s
            a cinematic journey through backroads, diners, and hidden corners of
            life. Shot with grit and scored with freedom, this ride is all about
            staying in the wind.
          </p>

          <Image
            src="/monty-bike.jpg"
            alt="Monty and The Iron Egg"
            width={800}
            height={450}
            className="rounded-xl shadow-xl border border-gray-700 mx-auto"
          />

          <p className="mt-10 text-gray-400 italic text-md">
            “There are no maps for roads you make yourself.” – Monty
          </p>
        </div>
      </motion.section>

      {/* About Monty */}
      <motion.section
        className="relative flex flex-col justify-center items-center bg-white text-white px-6 py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Diagonal stripe background */}
        <div className="absolute bottom-0 left-0 right-0 h-full opacity-35 bg-white bg-[repeating-linear-gradient(135deg,#00000015_0px,#00000015_20px,transparent_20px,transparent_40px)] rounded-2xl"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 uppercase tracking-wide">
            Meet Monty
          </h2>
          <Image
            src="/monty-bike.jpg"
            alt="Monty and The Iron Egg"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg border border-gray-700 mx-auto mb-6 "
          />
          <p className="text-gray-900 text-lg leading-relaxed mb-6">
            Part creator, part wanderer — Monty is the face behind the camera,
            the voice behind the helmet, and the soul of this ride. Raised on
            90s anime, cassette tapes, and motorcycle manuals, he lives for the
            in-between: golden-hour highways, street-lit corners, and stories
            told in exhaust smoke and helmet mics.
          </p>
          <p className="text-gray-900 italic text-md">
            “When the visor drops, the noise of the world fades — and the real
            story begins.”
          </p>
        </div>
      </motion.section>

      {/* About The Iron Egg */}
      <motion.section
        className="relative flex flex-col justify-center items-center bg-black text-white px-6 py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Diagonal stripes top accent */}
        <div className="absolute top-0 left-0 right-0 h-40 opacity-10 bg-[repeating-linear-gradient(45deg,#ff000020_0px,#ff000020_20px,transparent_20px,transparent_40px)]"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-red-500 uppercase tracking-wide">
            The Iron Egg
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The ride is a 2024 Honda Rebel 1100 — stripped-down, bare-knuckle.
            No frills. No touchscreen. Just raw torque, a whispering throttle,
            and a blacked-out silhouette that cuts through the dark like a steel
            bullet.
          </p>

          <Image
            src="/monty-bike.jpg"
            alt="2024 Honda Rebel 1100"
            width={800}
            height={450}
            className="rounded-xl shadow-xl border border-gray-700 mx-auto mb-6"
          />

          <p className="mt-6 text-gray-400 italic text-md">
            Minimal tech. Max soul. The Egg doesn’t ask questions — it just
            rides.
          </p>
        </div>
      </motion.section>
    </>
  );
}
