import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionHeader, FeatureCard } from "@/components/shared";
import { SITE_CONFIG, STATS, FEATURES } from "@/lib/constants";

const Home = () => {
  const stats = [
    { value: STATS.questions, label: "Questions" },
    { value: STATS.quizzes, label: "Quizzes" },
    { value: STATS.subjects, label: "Subjects" },
    { value: STATS.students, label: "Students" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Welcome to {SITE_CONFIG.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {SITE_CONFIG.tagline}. {SITE_CONFIG.description}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/quiz">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Why Choose QuizHub?"
            subtitle="Designed specifically for computer science students to excel in their academic journey"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of students who are already improving their skills with QuizHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Get Started Free
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
