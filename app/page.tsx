import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/images/icon-192x192.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">
            Welcome to LucyMath
          </h1>
          <p className="text-lg text-center">Have fun with math problems!</p>
        </div>
        <Link href="/solver">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
}
