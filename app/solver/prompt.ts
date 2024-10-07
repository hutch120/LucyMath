/**
 * This function could be used as a promt for ChatGPT or similar tools.
 * It provides a prompt for the user to generate a JSON data structure for math problems.
 *
 * @param level number
 * @returns
 */
export function getPrompt(level: number): string {
  return `
    You are a math teacher. 
    You are setting problems for your students at various difficulty levels ranging from Level 1 for kids aged 6-8 through to level 10 for university students. The problem must contain a question, solution, and four possible answers with only one being correct.

    Provide the data in the JSON format. Here is a typescript interface to help you understand the structure:
        
    interface Problems {
      difficultyLevel: number;
      problems: [{
        question: string;
        solution: string;
        options: {
          a: {
            value: string;
            correct: boolean;
          };
          b: {
            value: string;
            correct: boolean;
          };
          c: {
            value: string;
            correct: boolean;
          };
          d: {
            value: string;
            correct: boolean;
          };
        };
      }];
    }

    Set 10 math problem and solution for Level ${level} student.
    `;
}
