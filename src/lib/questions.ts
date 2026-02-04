export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const CPP_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Which of the following is the correct syntax for declaring a variable in C++?",
    options: ["int x;", "variable int x;", "declare int x;", "x: int;"],
    correct: 0,
    explanation: "In C++, variables are declared using the syntax: data_type variable_name;"
  },
  {
    id: 2,
    question: "What is the output of the following code?\n\n```cpp\ncout << 5 + 3 * 2;\n```",
    options: ["16", "11", "10", "13"],
    correct: 1,
    explanation: "Due to operator precedence, multiplication is performed before addition: 3 * 2 = 6, then 5 + 6 = 11"
  },
  {
    id: 3,
    question: "Which header file is required for input/output operations in C++?",
    options: ["<stdio.h>", "<iostream>", "<conio.h>", "<input.h>"],
    correct: 1,
    explanation: "<iostream> is the standard header file for input/output operations in C++"
  },
  {
    id: 4,
    question: "What is the correct way to create a pointer in C++?",
    options: ["int ptr;", "int *ptr;", "pointer int ptr;", "int &ptr;"],
    correct: 1,
    explanation: "In C++, pointers are declared using the asterisk (*) symbol: data_type *pointer_name;"
  },
  {
    id: 5,
    question: "Which of the following is used to terminate a C++ statement?",
    options: [":", ".", ";", ","],
    correct: 2,
    explanation: "In C++, statements are terminated with a semicolon (;)"
  }
];

export const getQuestionsBySubject = (subject: string): Question[] => {
  // For now, return CPP questions for all subjects (demo)
  // In a real app, this would fetch from an API or return subject-specific questions
  return CPP_QUESTIONS;
};
