import Head from "next/head";
import Image from "next/image";

const dummyGear = [
  {
    name: "Sena OutMotorcycle Helmet",
    image: "/senaHelmet.jpg",
    link: "https://www.amazon.com/Sena-Outrush-Bluetooth-Motorcycle-Intercom/dp/B09LRJ4SLZ/ref=sr_1_1_sspa?crid=2ZH4PQYYZX8KV&dib=eyJ2IjoiMSJ9.kF6SRGrsRDbN6-gmdCr4gpifbKufvMWMCMqvPpxScMLJq9Yh9y2BuEce5t6UVBkTOe94uiordZUX4up_plOaJUx_9kiDrfl41tt5eAy30BZioKViNy9Itgp5zxR41bAWaIFb23j40jwd5nQmz4HFS9aqbTSxOnX9k4KrLwnwC6rXqgOtqXA81n2wVBTOYw_7yW-ZK1g7m5Ziy8eyweUzTAypzkG_guNGLP6yb_LBiIhILTcdaLFuMSxKuqTc8_wsv9JEdsBFHrs_-Alslo0mD0QU23uUcEj2VLs6mN_mD-s.bFYBAdvw3Kfap_6551C-WEkd_7P2x4H1LweEErshwQ8&dib_tag=se&keywords=sena%2Boutrush%2Br%2Bbluetooth%2Bhelmet&qid=1756064617&sprefix=sena%2Boutrush%2Br%2Bb%2Caps%2C153&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    description: "Ride with confidence. DOT-certified full-face helmet.",
  },
  {
    name: "INBIKE Breathable Mesh Motorcycle",
    image: "/gloves.jpg",
    link: "https://www.amazon.com/dp/B0861VWQKJ?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    description: "Mesh tactical gloves for maximum grip and protection.",
  },
  {
    name: "DJi Osmo 4",
    image: "/djiOsmo4.jpg",
    link: "https://www.amazon.com/dp/B0C783YNW7?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    description: "Capture every turn in crisp 4K — motovlogger's choice.",
  },
  {
    name: "DJi Osmo Chin Mount",
    image: "/osmoHelmetMount.jpg",
    link: "#",
    description:
      "The standard for action cam footage. Sharp, stable, and waterproof.",
  },
  {
    name: "CamelBak HydroBak",
    image: "/camelBak.jpg",
    link: "https://www.amazon.com/dp/B01L8JENFO/ref=twister_B0F16N4MHP?_encoding=UTF8&th=1",
    description: "Crystal-clear water when you need it for the ride.",
  },
  {
    name: "AlpineStars Armored TSP V2 mesh Jacket ",
    image: "/alpineJacket.jpg",
    link: "https://www.amazon.com/dp/B0DXZMRBN6?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1&psc=1",
    description: "Urban stealth style meets high-impact protection.",
  },
  {
    name: "JOYROOM Motorcycle Phone Mount",
    image: "/phoneMount.jpg",
    link: "https://www.amazon.com/dp/B09PVFN7LG?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    description: "Sturdy phone holder for motorcycle riders.",
  },
  {
    name: "PSLER Engine Guard Highway Crash Bars for CMX Rebel 1100 ",
    image: "/crashBarRebel.jpg",
    link: "https://www.amazon.com/dp/B0CD82Q5H7?ref=ppx_yo2ov_dt_b_fed_asin_title",
    description: "Crash guards for Honda Rebel CMX Rebel 1100.",
  },
  {
    name: "BANGTING 4Ft Bike Chain Lock Heavy Duty with 110dB Alarm",
    image: "/chainLock.jpg",
    link: "https://www.amazon.com/dp/B0DTJ85QJH?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    description:
      "Bicycle Lock Heavy Duty Anti Theft Security Bike Locks with Key for Motorcycles (Black)",
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
