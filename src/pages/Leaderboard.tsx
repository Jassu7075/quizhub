import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Crown, Star, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topPerformers = [
    {
      rank: 1,
      name: "Arjun Sharma",
      score: 2450,
      quizzes: 48,
      accuracy: 94,
      subject: "C++",
      avatar: "AS"
    },
    {
      rank: 2,
      name: "Priya Patel",
      score: 2380,
      quizzes: 45,
      accuracy: 91,
      subject: "Python",
      avatar: "PP"
    },
    {
      rank: 3,
      name: "Rahul Kumar",
      score: 2320,
      quizzes: 42,
      accuracy: 89,
      subject: "Java",
      avatar: "RK"
    },
    {
      rank: 4,
      name: "Sneha Reddy",
      score: 2280,
      quizzes: 41,
      accuracy: 88,
      subject: "Aptitude",
      avatar: "SR"
    },
    {
      rank: 5,
      name: "Vikram Singh",
      score: 2240,
      quizzes: 39,
      accuracy: 87,
      subject: "HTML",
      avatar: "VS"
    },
    {
      rank: 6,
      name: "Anita Gupta",
      score: 2200,
      quizzes: 38,
      accuracy: 86,
      subject: "Python",
      avatar: "AG"
    },
    {
      rank: 7,
      name: "Deepak Joshi",
      score: 2150,
      quizzes: 36,
      accuracy: 85,
      subject: "C++",
      avatar: "DJ"
    },
    {
      rank: 8,
      name: "Kavya Nair",
      score: 2100,
      quizzes: 35,
      accuracy: 84,
      subject: "Java",
      avatar: "KN"
    }
  ];

  const subjectLeaders = [
    { subject: "C++", leader: "Arjun Sharma", score: 2450, icon: "⚡" },
    { subject: "Python", leader: "Priya Patel", score: 2380, icon: "🐍" },
    { subject: "Java", leader: "Rohit Verma", score: 2100, icon: "☕" },
    { subject: "HTML", leader: "Vikram Singh", score: 1980, icon: "🌐" },
    { subject: "Aptitude", leader: "Sneha Reddy", score: 2280, icon: "🧠" }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
      case 2:
        return "from-gray-400/20 to-gray-500/20 border-gray-400/30";
      case 3:
        return "from-amber-600/20 to-amber-700/20 border-amber-600/30";
      default:
        return "from-card to-card border-border";
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground">
            See how you rank among QuizHub's top performers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  Overall Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-4 rounded-lg bg-gradient-to-r ${getRankColor(user.rank)} transition-all duration-200 hover:shadow-md`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8">
                          {getRankIcon(user.rank)}
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>Best in {user.subject}</span>
                            <span>•</span>
                            <span>{user.quizzes} quizzes</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">{user.score}</div>
                        <div className="text-sm text-muted-foreground">{user.accuracy}% accuracy</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Performance */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-3xl font-bold text-accent mb-2">15</div>
                    <div className="text-sm text-muted-foreground">Your Rank</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/10">
                    <div className="text-3xl font-bold text-secondary mb-2">1850</div>
                    <div className="text-sm text-muted-foreground">Total Score</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-cta/10">
                    <div className="text-3xl font-bold text-cta mb-2">82%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary mb-2">28</div>
                    <div className="text-sm text-muted-foreground">Quizzes Taken</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subject Leaders */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Champions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjectLeaders.map((leader, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{leader.icon}</div>
                        <div>
                          <div className="font-medium text-sm">{leader.subject}</div>
                          <div className="text-xs text-muted-foreground">{leader.leader}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm">{leader.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10">
                    <Trophy className="w-8 h-8 text-accent" />
                    <div>
                      <div className="font-medium text-sm">Quiz Master</div>
                      <div className="text-xs text-muted-foreground">Complete 50 quizzes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/10">
                    <Medal className="w-8 h-8 text-secondary" />
                    <div>
                      <div className="font-medium text-sm">Perfect Score</div>
                      <div className="text-xs text-muted-foreground">Get 100% in any quiz</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-cta/10">
                    <Star className="w-8 h-8 text-cta" />
                    <div>
                      <div className="font-medium text-sm">Speed Demon</div>
                      <div className="text-xs text-muted-foreground">Complete quiz in under 10 min</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Improve Your Rank</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="quiz" className="w-full">
                  Take a Quiz
                </Button>
                <Button variant="outline" className="w-full">
                  Practice Mode
                </Button>
                <Button variant="outline" className="w-full">
                  Review Mistakes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;