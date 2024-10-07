import { IProblems } from "./interfaces";

export const data: IProblems = {
  difficultyLevel: 4,
  problems: [
    {
      question: "What is 12 × 3?",
      solution: "Multiply 12 by 3 to get 36.",
      options: {
        a: {
          value: "32",
          correct: false,
        },
        b: {
          value: "34",
          correct: false,
        },
        c: {
          value: "36",
          correct: true,
        },
        d: {
          value: "38",
          correct: false,
        },
      },
    },
    {
      question:
        "What is the perimeter of a rectangle with sides 5 cm and 7 cm?",
      solution:
        "Perimeter = 2 × (length + width) = 2 × (5 + 7) = 2 × 12 = 24 cm.",
      options: {
        a: {
          value: "22 cm",
          correct: false,
        },
        b: {
          value: "24 cm",
          correct: true,
        },
        c: {
          value: "26 cm",
          correct: false,
        },
        d: {
          value: "28 cm",
          correct: false,
        },
      },
    },
    {
      question: "What is 45 ÷ 5?",
      solution: "Dividing 45 by 5 gives 9.",
      options: {
        a: {
          value: "7",
          correct: false,
        },
        b: {
          value: "8",
          correct: false,
        },
        c: {
          value: "9",
          correct: true,
        },
        d: {
          value: "10",
          correct: false,
        },
      },
    },
    {
      question: "Find the value of 15 - (6 + 2).",
      solution:
        "First, calculate inside the parentheses: 6 + 2 = 8. Then subtract from 15: 15 - 8 = 7.",
      options: {
        a: {
          value: "6",
          correct: false,
        },
        b: {
          value: "7",
          correct: true,
        },
        c: {
          value: "8",
          correct: false,
        },
        d: {
          value: "9",
          correct: false,
        },
      },
    },
    {
      question: "A square has a side length of 4 cm. What is its area?",
      solution: "Area of a square = side × side = 4 × 4 = 16 cm².",
      options: {
        a: {
          value: "12 cm²",
          correct: false,
        },
        b: {
          value: "14 cm²",
          correct: false,
        },
        c: {
          value: "16 cm²",
          correct: true,
        },
        d: {
          value: "18 cm²",
          correct: false,
        },
      },
    },
    {
      question: "What is the least common multiple (LCM) of 4 and 6?",
      solution:
        "The multiples of 4 are 4, 8, 12, 16, etc. The multiples of 6 are 6, 12, 18, etc. The LCM is 12.",
      options: {
        a: {
          value: "6",
          correct: false,
        },
        b: {
          value: "8",
          correct: false,
        },
        c: {
          value: "10",
          correct: false,
        },
        d: {
          value: "12",
          correct: true,
        },
      },
    },
    {
      question: "What is 25% of 80?",
      solution: "25% of 80 is calculated as (25/100) × 80 = 20.",
      options: {
        a: {
          value: "15",
          correct: false,
        },
        b: {
          value: "18",
          correct: false,
        },
        c: {
          value: "20",
          correct: true,
        },
        d: {
          value: "25",
          correct: false,
        },
      },
    },
    {
      question: "What is the value of 3²?",
      solution: "3² is 3 multiplied by itself: 3 × 3 = 9.",
      options: {
        a: {
          value: "6",
          correct: false,
        },
        b: {
          value: "8",
          correct: false,
        },
        c: {
          value: "9",
          correct: true,
        },
        d: {
          value: "12",
          correct: false,
        },
      },
    },
    {
      question: "What is the sum of the angles in a triangle?",
      solution: "The sum of the angles in any triangle is always 180 degrees.",
      options: {
        a: {
          value: "90°",
          correct: false,
        },
        b: {
          value: "180°",
          correct: true,
        },
        c: {
          value: "270°",
          correct: false,
        },
        d: {
          value: "360°",
          correct: false,
        },
      },
    },
    {
      question:
        "If a bag contains 3 red balls, 5 blue balls, and 2 green balls, how many balls are in the bag in total?",
      solution:
        "Add the number of red, blue, and green balls: 3 + 5 + 2 = 10 balls.",
      options: {
        a: {
          value: "8",
          correct: false,
        },
        b: {
          value: "9",
          correct: false,
        },
        c: {
          value: "10",
          correct: true,
        },
        d: {
          value: "11",
          correct: false,
        },
      },
    },
  ],
};
