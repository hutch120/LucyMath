import Image from "next/image";

const problemTemplate = {
  problem: "",
  difficulty: "easy",
  solved: false,
  attempts: 0,
  submissions: 0,
};

const data = {
  problems: [{}],
};

export default function Solver() {
  const problem1 = { ...problemTemplate, problem: "3 + 4" };
  data.problems.push(problem1);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/images/hero3.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">Solver</h1>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </main>
    </div>
  );
}
