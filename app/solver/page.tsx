"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Confetti from "react-confetti";
import { data } from "./level1";
import { IProblemOption, IProblem } from "./interfaces";

export default function Solver() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<IProblemOption | null>(
    null
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const totalProblems = data.problems.length;
  const currentProblem: IProblem | undefined =
    data.problems[currentProblemIndex];

  const handleOptionSelect = (option: IProblemOption) => {
    setSelectedOption(option);
    setIsCorrect(option.correct);
  };

  const handleNextProblem = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentProblemIndex < totalProblems - 1) {
      setCurrentProblemIndex((prevIndex) => prevIndex + 1);
    }
  };

  const solvedProblems = currentProblemIndex + (isCorrect !== null ? 1 : 0);
  const progressPercentage = (solvedProblems / totalProblems) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      {isCorrect && <Confetti />}
      <header className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/icon-192x192.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          <h1 className="text-2xl font-bold">Lucy Math</h1>
        </div>
      </header>
      <main className="flex flex-col flex-grow items-center justify-center p-4 sm:p-20">
        <Image
          src="/images/icon-192x192.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {currentProblem ? (
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
            {selectedOption !== null && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Solution:</h3>
                <p>{currentProblem.solution}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Complete!</h2>
            <p className="mt-4">You have completed all the problems.</p>
          </div>
        )}

        {selectedOption !== null && currentProblemIndex < totalProblems - 1 && (
          <button
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleNextProblem}
          >
            Next Problem
          </button>
        )}
      </main>

      <footer className="w-full p-4 bg-gray-800 text-white">
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
