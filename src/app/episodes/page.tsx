// pages/rides.tsx
import Head from "next/head";

const dummyRides = [
  {
    title: "Midnight Run Through Orlando",
    date: "2024-10-21",
    description:
      "A rainy night, empty streets, and the Iron Egg roaring through the neon fog.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  },
  {
    title: "Dawn Patrol on the Beachline",
    date: "2024-11-03",
    description:
      "Early morning silence, 70mph, and a cup of gas-station coffee at the end.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  },
];

export default function RidesPage() {
  return (
    <>
      <Head>
        <title>Rides – Monty & The Iron Egg</title>
        <meta
          name="description"
          content="Every ride tells a story. Watch, read, and feel the road."
        />
      </Head>

      <section className="relative min-h-screen bg-black text-black px-6 py-32 overflow-hidden">
        {/* subtle diagonal stripes overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,#ffffff15_0px,#ffffff15_20px,transparent_20px,transparent_40px)]"></div>

        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-red-600 text-center uppercase tracking-wide relative z-10">
          Rides & Stories
        </h1>

        <div className="space-y-20 max-w-5xl mx-auto relative z-10">
          {dummyRides.map((ride, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl border border-gray-700 shadow-lg relative overflow-hidden"
            >
              {/* inverted diagonal stripes background */}
              <div className="absolute bottom-0 left-0 right-0 h-full opacity-35 bg-white bg-[repeating-linear-gradient(135deg,#00000015_0px,#00000015_20px,transparent_20px,transparent_40px)] rounded-2xl" />

              <h2 className="text-3xl font-semibold mb-3 relative z-10">
                {ride.title}
              </h2>
              <p className="text-black text-sm mb-6 relative z-10">
                {ride.date}
              </p>
              <p className="text-black mb-6 relative z-10">
                {ride.description}
              </p>

              <div className="aspect-video rounded-xl overflow-hidden relative z-10">
                <iframe
                  width="100%"
                  height="100%"
                  src={ride.video}
                  title={ride.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
