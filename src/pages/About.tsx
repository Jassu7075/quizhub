import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, GraduationCap, Code, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader, FeatureCard } from "@/components/shared";
import { CREATOR } from "@/lib/constants";

const About = () => {
  const platformFeatures = [
    { title: "Subject Variety", description: "Comprehensive coverage of C++, Python, Java, HTML, and Aptitude questions", emoji: "📚" },
    { title: "Timed Quizzes", description: "Each quiz comes with a countdown timer to simulate real exam conditions", emoji: "⏰" },
    { title: "Instant Results", description: "Get immediate feedback with detailed explanations for each answer", emoji: "📊" },
    { title: "Leaderboard", description: "Track your progress and compete with fellow students", emoji: "🏆" },
    { title: "Responsive Design", description: "Perfect experience across all devices - desktop, tablet, and mobile", emoji: "📱" },
    { title: "Dark/Light Mode", description: "Switch between themes for comfortable studying any time of day", emoji: "🌙" },
  ];

  const visionCards = [
    { title: "Mission", color: "accent", content: "To create an engaging platform where computer science students can test and improve their knowledge through structured, timed quizzes covering essential programming languages and aptitude skills." },
    { title: "Goal", color: "secondary", content: "Helping students prepare for academic exams, competitive programming, and job interviews by providing instant feedback and progress tracking through our comprehensive quiz system." },
    { title: "Impact", color: "cta", content: "Building a community of learners who can compete, learn, and grow together through our leaderboard system and comprehensive subject coverage." },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeader
          title="About QuizHub"
          subtitle="Empowering students with interactive learning through subject-based MCQ quizzes"
        />

        {/* Creator & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Creator */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Meet the Creator</h2>
            <Card className="bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mr-4">
                    <GraduationCap className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{CREATOR.name}</h3>
                    <p className="text-muted-foreground">{CREATOR.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="w-5 h-5 mr-3 text-accent" />
                    <span>{CREATOR.year}, {CREATOR.institution}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Code className="w-5 h-5 mr-3 text-accent" />
                    <span>Academic Year: {CREATOR.academicYear}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Target className="w-5 h-5 mr-3 text-accent" />
                    <span>Passionate about Web Development & Problem Solving</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Project Vision</h2>
            <div className="space-y-6">
              {visionCards.map((card) => (
                <Card 
                  key={card.title} 
                  className={`border-l-4 border-l-${card.color} bg-card/50`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
                    <p className="text-muted-foreground">{card.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <SectionHeader
            title="Platform Features"
            gradient={false}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                emoji={feature.emoji}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the QuizHub community and start improving your skills today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button variant="quiz" size="lg" className="text-lg px-8 py-6">
                Start Your First Quiz
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
