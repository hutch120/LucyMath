"use client";

import { useState } from "react";
import Image from "next/image";
import { data } from "./level1";
import { IProblemOption, IProblem } from "./interfaces";

export default function Solver() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<IProblemOption | null>(
    null
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentProblem: IProblem = data.problems[currentProblemIndex];

  const handleOptionSelect = (option: IProblemOption) => {
    setSelectedOption(option);
    setIsCorrect(option.correct);
  };

  const handleNextProblem = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentProblemIndex((prevIndex) => prevIndex + 1);
  };

  const totalProblems = data.problems.length;
  const solvedProblems = currentProblemIndex + (isCorrect !== null ? 1 : 0);
  const progressPercentage = (solvedProblems / totalProblems) * 100;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/images/hero.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold">{currentProblem.question}</h2>
          <div className="mt-4">
            {Object.entries(currentProblem.options).map(
              ([key, option]: [string, IProblemOption]) => (
                <button
                  key={key}
                  className={`block w-full p-2 mt-2 border rounded ${
                    selectedOption === option
                      ? isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                >
                  {option.value}
                  {selectedOption === option && isCorrect && (
                    <span className="ml-2">✔️</span>
                  )}
                </button>
              )
            )}
          </div>
        </div>

        {selectedOption !== null && (
          <button
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleNextProblem}
          >
            Next Problem
          </button>
        )}
      </main>

      <footer className="row-start-3 w-full">
        <div className="w-full bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-center mt-2">
          Problem {currentProblemIndex + 1} of {totalProblems} (
          {progressPercentage.toFixed(2)}% solved)
        </div>
      </footer>
    </div>
  );
}
