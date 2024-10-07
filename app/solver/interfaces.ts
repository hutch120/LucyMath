export interface IProblemOption {
  value: string;
  correct: boolean;
}

export interface IProblem {
  question: string;
  solution: string;
  options: {
    a: IProblemOption;
    b: IProblemOption;
    c: IProblemOption;
    d: IProblemOption;
  };
}

export interface IProblems {
  difficultyLevel: number;
  problems: IProblem[];
}
