import Head from "next/head";
import Image from "next/image";

const dummyGear = [
  {
    name: "Sena OutMotorcycle Helmet",
    image: "/gear/helmet.jpg",
    link: "#",
    description: "Ride with confidence. DOT-certified full-face helmet.",
  },
  {
    name: "Riding Gloves",
    image: "/gear/gloves.jpg",
    link: "#",
    description: "Leather tactical gloves for maximum grip and protection.",
  },
  {
    name: "DJi Osmo 4",
    image: "/gear/dji4.jpg",
    link: "#",
    description: "Capture every turn in crisp 4K — motovlogger's choice.",
  },
  {
    name: "DJi Osmo Chin Mount",
    image: "/gear/gopro12.jpg",
    link: "#",
    description:
      "The standard for action cam footage. Sharp, stable, and waterproof.",
  },
  {
    name: "Rokform Motorcycle Phone Mount",
    image: "/gear/rokform.jpg",
    link: "#",
    description: "Rock-solid grip for your phone. Never drop mid-ride.",
  },
  {
    name: "CamelBak HydroBak",
    image: "/gear/cardo.jpg",
    link: "#",
    description: "Crystal-clear water when you need it for the ride.",
  },
  {
    name: "AlpineStars Armored TSP V2 mesh Jacket ",
    image: "/gear/jacket.jpg",
    link: "#",
    description: "Urban stealth style meets high-impact protection.",
  },
];

export default function GearPage() {
  return (
    <>
      <Head>
        <title>Gear – Monty & The Iron Egg</title>
        <meta
          name="description"
          content="Check out the gear Monty uses on the road. Handpicked moto tech and apparel."
        />
      </Head>

      <section className="min-h-screen bg-black text-white px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-red-600 uppercase tracking-wide">
          Road Gear
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {dummyGear.map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white text-black"
            >
              {/* inverted diagonal stripes background */}
              <div className="absolute bottom-0 left-0 right-0 h-full opacity-35 bg-white bg-[repeating-linear-gradient(135deg,#00000015_0px,#00000015_20px,transparent_20px,transparent_40px)] rounded-2xl" />

              {/* content above stripes */}
              <div className="relative z-10">
                <Image
                  src={item.image}
                  width={500}
                  height={300}
                  alt={item.name}
                  className="rounded-lg mb-4 object-cover w-full h-[200px]"
                />
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                <p className="mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
