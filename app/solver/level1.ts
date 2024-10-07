import { IProblems } from "./interfaces";

export const data: IProblems = {
  difficultyLevel: 1,
  problems: [
    {
      question: "What is 2 + 2?",
      solution: "To find the sum, add 2 and 2, which equals 4.",
      options: {
        a: {
          value: "3",
          correct: false,
        },
        b: {
          value: "4",
          correct: true,
        },
        c: {
          value: "5",
          correct: false,
        },
        d: {
          value: "6",
          correct: false,
        },
      },
    },
    {
      question: "What comes after the number 6?",
      solution: "The number that comes after 6 is 7.",
      options: {
        a: {
          value: "5",
          correct: false,
        },
        b: {
          value: "6",
          correct: false,
        },
        c: {
          value: "7",
          correct: true,
        },
        d: {
          value: "8",
          correct: false,
        },
      },
    },
    {
      question:
        "If you have 3 apples and you get 2 more, how many apples do you have in total?",
      solution: "Adding 3 apples and 2 apples gives you 5 apples.",
      options: {
        a: {
          value: "4",
          correct: false,
        },
        b: {
          value: "5",
          correct: true,
        },
        c: {
          value: "6",
          correct: false,
        },
        d: {
          value: "7",
          correct: false,
        },
      },
    },
    {
      question: "What is 5 - 3?",
      solution: "Subtracting 3 from 5 leaves 2.",
      options: {
        a: {
          value: "1",
          correct: false,
        },
        b: {
          value: "2",
          correct: true,
        },
        c: {
          value: "3",
          correct: false,
        },
        d: {
          value: "4",
          correct: false,
        },
      },
    },
    {
      question: "Which number is bigger: 2 or 5?",
      solution: "The number 5 is greater than 2.",
      options: {
        a: {
          value: "2",
          correct: false,
        },
        b: {
          value: "5",
          correct: true,
        },
        c: {
          value: "1",
          correct: false,
        },
        d: {
          value: "3",
          correct: false,
        },
      },
    },
    {
      question: "What is 1 + 1?",
      solution: "Adding 1 and 1 equals 2.",
      options: {
        a: {
          value: "2",
          correct: true,
        },
        b: {
          value: "3",
          correct: false,
        },
        c: {
          value: "4",
          correct: false,
        },
        d: {
          value: "1",
          correct: false,
        },
      },
    },
    {
      question:
        "If you see 4 ducks in a pond, and 1 duck flies away, how many ducks are left in the pond?",
      solution: "Subtracting 1 from 4 leaves 3 ducks.",
      options: {
        a: {
          value: "2",
          correct: false,
        },
        b: {
          value: "3",
          correct: true,
        },
        c: {
          value: "4",
          correct: false,
        },
        d: {
          value: "5",
          correct: false,
        },
      },
    },
    {
      question: "Which is smaller: 1 or 3?",
      solution: "The number 1 is smaller than 3.",
      options: {
        a: {
          value: "1",
          correct: true,
        },
        b: {
          value: "2",
          correct: false,
        },
        c: {
          value: "3",
          correct: false,
        },
        d: {
          value: "4",
          correct: false,
        },
      },
    },
    {
      question: "What is 0 + 5?",
      solution: "Adding 0 to any number gives that number. 0 + 5 is 5.",
      options: {
        a: {
          value: "0",
          correct: false,
        },
        b: {
          value: "5",
          correct: true,
        },
        c: {
          value: "10",
          correct: false,
        },
        d: {
          value: "15",
          correct: false,
        },
      },
    },
    {
      question: "What is double of 2?",
      solution: "Doubling 2 gives 4.",
      options: {
        a: {
          value: "2",
          correct: false,
        },
        b: {
          value: "3",
          correct: false,
        },
        c: {
          value: "4",
          correct: true,
        },
        d: {
          value: "5",
          correct: false,
        },
      },
    },
  ],
};
