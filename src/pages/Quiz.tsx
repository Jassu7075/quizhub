import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SUBJECT_INFO } from "@/lib/constants";
import { getQuestionsBySubject, type Question } from "@/lib/questions";

const QUIZ_DURATION = 600; // 10 minutes in seconds

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = getQuestionsBySubject(subject || "cpp");
  const currentSubject = SUBJECT_INFO[subject as keyof typeof SUBJECT_INFO] || SUBJECT_INFO.cpp;

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleQuizComplete = useCallback(() => {
    const finalAnswers = [...answers];
    if (selectedAnswer !== null) {
      finalAnswers[currentQuestion] = selectedAnswer;
    }
    
    let correctCount = 0;
    finalAnswers.forEach((answer, index) => {
      if (answer === questions[index]?.correct) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setQuizCompleted(true);
    setAnswers(finalAnswers);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${correctCount}/${questions.length} (${Math.round((correctCount / questions.length) * 100)}%)`,
    });
  }, [answers, selectedAnswer, currentQuestion, questions, toast]);

  // Timer effect
  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleQuizComplete();
    }
  }, [timeLeft, quizStarted, quizCompleted, handleQuizComplete]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(QUIZ_DURATION);
    toast({
      title: "Quiz Started!",
      description: "Good luck! You have 10 minutes to complete it.",
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        handleQuizComplete();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(QUIZ_DURATION);
    setQuizStarted(false);
    setQuizCompleted(false);
    setScore(0);
  };

  // Start Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <Card className="max-w-lg w-full shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">{currentSubject.icon}</div>
            <CardTitle className="text-3xl mb-2">{currentSubject.name} Quiz</CardTitle>
            <p className="text-muted-foreground">Test your knowledge with this comprehensive quiz</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-accent">{questions.length}</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-secondary">10</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Quiz Rules:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• You have 10 minutes to complete the quiz</li>
                <li>• Each question has 4 options with 1 correct answer</li>
                <li>• You can navigate between questions</li>
                <li>• Quiz will auto-submit when time runs out</li>
              </ul>
            </div>
            
            <Button onClick={startQuiz} className="w-full" variant="quiz" size="lg">
              Start Quiz
            </Button>
            
            <Button onClick={() => navigate('/quiz')} variant="outline" className="w-full">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Results Screen
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 60;
    
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>
              <CardTitle className="text-3xl mb-2">
                {passed ? "Congratulations!" : "Keep Learning!"}
              </CardTitle>
              <p className="text-muted-foreground">
                {passed ? "You've successfully completed the quiz!" : "Don't worry, practice makes perfect!"}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Summary */}
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
                  <div className="text-3xl font-bold text-accent mb-2">{score}/{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Correct Answers</div>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <div className="text-3xl font-bold text-secondary mb-2">{percentage}%</div>
                  <div className="text-sm text-muted-foreground">Your Score</div>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-3xl font-bold text-primary mb-2">{formatTime(QUIZ_DURATION - timeLeft)}</div>
                  <div className="text-sm text-muted-foreground">Time Taken</div>
                </div>
              </div>

              {/* Review Answers */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Review Your Answers</h3>
                {questions.map((question, index) => (
                  <ReviewCard 
                    key={index}
                    question={question}
                    index={index}
                    userAnswer={answers[index]}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={restartQuiz} variant="quiz" className="flex-1">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={() => navigate('/quiz')} variant="outline" className="flex-1">
                  Back to Dashboard
                </Button>
                <Button onClick={() => navigate('/leaderboard')} variant="secondary" className="flex-1">
                  View Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{currentSubject.icon}</div>
            <div>
              <h1 className="text-2xl font-bold">{currentSubject.name} Quiz</h1>
              <p className="text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
          </div>
          
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </Badge>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Progress: {Math.round(progress)}%</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
        </div>

        {/* Question */}
        <Card className="mb-6 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl whitespace-pre-line">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full text-left justify-start h-auto p-4 ${
                    selectedAnswer === index ? 'bg-accent text-accent-foreground' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            variant={currentQuestion === questions.length - 1 ? "cta" : "quiz"}
            className="flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Extracted ReviewCard component
interface ReviewCardProps {
  question: Question;
  index: number;
  userAnswer: number | undefined;
}

const ReviewCard = ({ question, index, userAnswer }: ReviewCardProps) => {
  const isCorrect = userAnswer === question.correct;
  
  return (
    <Card className={`border-l-4 ${isCorrect ? 'border-l-accent' : 'border-l-destructive'}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-sm">Question {index + 1}</h4>
          {isCorrect ? (
            <CheckCircle className="w-5 h-5 text-accent" />
          ) : (
            <XCircle className="w-5 h-5 text-destructive" />
          )}
        </div>
        <p className="text-sm mb-3 whitespace-pre-line">{question.question}</p>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Your answer:</span>
            <span className={isCorrect ? 'text-accent' : 'text-destructive'}>
              {userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
            </span>
          </div>
          {!isCorrect && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Correct answer:</span>
              <span className="text-accent">{question.options[question.correct]}</span>
            </div>
          )}
          <p className="text-muted-foreground italic mt-2">{question.explanation}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
