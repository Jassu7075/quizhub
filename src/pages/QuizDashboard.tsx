import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Award, Play, Users } from "lucide-react";
import { Link } from "react-router-dom";

const QuizDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: "cpp",
      name: "C++",
      icon: "⚡",
      description: "Object-oriented programming concepts, STL, and algorithms",
      quizzes: 12,
      totalQuestions: 120,
      difficulty: "Intermediate",
      averageTime: "45 min",
      color: "bg-blue-500"
    },
    {
      id: "python",
      name: "Python",
      icon: "🐍",
      description: "Python syntax, data structures, and built-in functions",
      quizzes: 15,
      totalQuestions: 150,
      difficulty: "Beginner",
      averageTime: "30 min",
      color: "bg-green-500"
    },
    {
      id: "java",
      name: "Java",
      icon: "☕",
      description: "Core Java, OOP principles, and collections framework",
      quizzes: 10,
      totalQuestions: 100,
      difficulty: "Intermediate",
      averageTime: "40 min",
      color: "bg-orange-500"
    },
    {
      id: "html",
      name: "HTML",
      icon: "🌐",
      description: "HTML5 elements, semantic markup, and web standards",
      quizzes: 8,
      totalQuestions: 80,
      difficulty: "Beginner",
      averageTime: "25 min",
      color: "bg-red-500"
    },
    {
      id: "aptitude",
      name: "Aptitude",
      icon: "🧠",
      description: "Logical reasoning, quantitative aptitude, and problem solving",
      quizzes: 20,
      totalQuestions: 200,
      difficulty: "Mixed",
      averageTime: "60 min",
      color: "bg-purple-500"
    }
  ];

  const recentQuizzes = [
    { name: "C++ Basics", score: 85, date: "2 days ago", subject: "C++" },
    { name: "Python Functions", score: 92, date: "1 week ago", subject: "Python" },
    { name: "Java Collections", score: 78, date: "1 week ago", subject: "Java" },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quiz Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your subject and start testing your knowledge
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Quizzes</p>
                  <p className="text-3xl font-bold text-accent">65</p>
                </div>
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Questions</p>
                  <p className="text-3xl font-bold text-secondary">650</p>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cta/10 to-cta/5 border-cta/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                  <p className="text-3xl font-bold text-cta">85%</p>
                </div>
                <Award className="h-8 w-8 text-cta" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Students</p>
                  <p className="text-3xl font-bold text-primary">1.2K</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subjects Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Available Subjects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject) => (
                <Card 
                  key={subject.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedSubject === subject.id ? 'ring-2 ring-accent' : ''
                  }`}
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{subject.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{subject.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {subject.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {subject.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quizzes:</span>
                        <span className="font-medium">{subject.quizzes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Questions:</span>
                        <span className="font-medium">{subject.totalQuestions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Time:</span>
                        <span className="font-medium">{subject.averageTime}</span>
                      </div>
                    </div>
                    <Link to={`/quiz/${subject.id}`}>
                      <Button className="w-full mt-4" variant="quiz">
                        <Play className="w-4 h-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Recent Activity</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Quiz Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuizzes.map((quiz, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div>
                        <p className="font-medium text-sm">{quiz.name}</p>
                        <p className="text-xs text-muted-foreground">{quiz.subject} • {quiz.date}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-sm ${
                          quiz.score >= 80 ? 'text-accent' : quiz.score >= 60 ? 'text-cta' : 'text-destructive'
                        }`}>
                          {quiz.score}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/leaderboard">
                  <Button variant="outline" className="w-full mt-4">
                    View Leaderboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Practice Mode
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  View Achievements
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;