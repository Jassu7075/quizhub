import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Award, Play, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader, StatsCard } from "@/components/shared";
import { SUBJECTS } from "@/lib/constants";

const QuizDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const recentQuizzes = [
    { name: "C++ Basics", score: 85, date: "2 days ago", subject: "C++" },
    { name: "Python Functions", score: 92, date: "1 week ago", subject: "Python" },
    { name: "Java Collections", score: 78, date: "1 week ago", subject: "Java" },
  ];

  const dashboardStats = [
    { label: "Total Quizzes", value: "65", icon: BookOpen, colorClass: "accent" },
    { label: "Questions", value: "650", icon: Clock, colorClass: "secondary" },
    { label: "Avg Score", value: "85%", icon: Award, colorClass: "cta" },
    { label: "Students", value: "1.2K", icon: Users, colorClass: "primary" },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="Quiz Dashboard"
          subtitle="Choose your subject and start testing your knowledge"
          centered={false}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat) => (
            <StatsCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              colorClass={stat.colorClass}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subjects Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Available Subjects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {SUBJECTS.map((subject) => (
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

          {/* Recent Activity Sidebar */}
          <div className="space-y-6">
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
            <Card>
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
