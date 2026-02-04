import { BookOpen, Users, Trophy, Clock } from "lucide-react";

export const SITE_CONFIG = {
  name: "QuizHub",
  tagline: "Master your subjects through interactive MCQ quizzes",
  description: "Perfect for CSE students and competitive exam preparation",
};

export const STATS = {
  questions: "500+",
  quizzes: "50+",
  subjects: "5",
  students: "1000+",
};

export const FEATURES = [
  {
    icon: BookOpen,
    title: "Subject-Based Quizzes",
    description: "Test your knowledge in C++, Python, Java, HTML, and Aptitude",
  },
  {
    icon: Clock,
    title: "Timed Challenges",
    description: "Each quiz comes with a timer to test your quick thinking",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Compete with other students and track your progress",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Join thousands of students improving their skills",
  },
];

export const SUBJECTS = [
  {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    description: "Object-oriented programming concepts, STL, and algorithms",
    quizzes: 12,
    totalQuestions: 120,
    difficulty: "Intermediate" as const,
    averageTime: "45 min",
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    description: "Python syntax, data structures, and built-in functions",
    quizzes: 15,
    totalQuestions: 150,
    difficulty: "Beginner" as const,
    averageTime: "30 min",
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    description: "Core Java, OOP principles, and collections framework",
    quizzes: 10,
    totalQuestions: 100,
    difficulty: "Intermediate" as const,
    averageTime: "40 min",
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    description: "HTML5 elements, semantic markup, and web standards",
    quizzes: 8,
    totalQuestions: 80,
    difficulty: "Beginner" as const,
    averageTime: "25 min",
  },
  {
    id: "aptitude",
    name: "Aptitude",
    icon: "🧠",
    description: "Logical reasoning, quantitative aptitude, and problem solving",
    quizzes: 20,
    totalQuestions: 200,
    difficulty: "Mixed" as const,
    averageTime: "60 min",
  },
];

export const SUBJECT_INFO: Record<string, { name: string; icon: string }> = {
  cpp: { name: "C++", icon: "⚡" },
  python: { name: "Python", icon: "🐍" },
  java: { name: "Java", icon: "☕" },
  html: { name: "HTML", icon: "🌐" },
  aptitude: { name: "Aptitude", icon: "🧠" },
};

export const CREATOR = {
  name: "Jakkam Jaswanth Kumar",
  role: "Computer Science Engineering Student",
  institution: "Lendi Institute of Engineering and Technology",
  academicYear: "2022 - 2026",
  year: "4th Year CSE",
};
