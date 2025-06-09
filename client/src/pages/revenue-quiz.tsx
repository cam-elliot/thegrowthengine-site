import { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Question {
  id: number;
  title: string;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

interface QuizResult {
  score: number;
  percentage: number;
  readinessLevel: string;
  description: string;
  answers: { [key: number]: number };
}

const questions: Question[] = [
  {
    id: 1,
    title: "Growth Strategy",
    question: "How clear is your current go-to-market (GTM) strategy?",
    options: [
      { text: "Very clear — documented and aligned across the team", points: 3 },
      { text: "Somewhat clear — a basic plan but not consistently followed", points: 2 },
      { text: "Not clear — we're mostly reactive or opportunistic", points: 1 }
    ]
  },
  {
    id: 2,
    title: "Sales Process",
    question: "Do you have a defined sales process that your team consistently follows?",
    options: [
      { text: "Yes — we have a clear, documented process", points: 3 },
      { text: "Sort of — there's a general flow, but it's not consistent", points: 2 },
      { text: "No — every salesperson does it differently", points: 1 }
    ]
  },
  {
    id: 3,
    title: "CRM and Tech Stack",
    question: "How well is your CRM or sales technology supporting your sales efforts?",
    options: [
      { text: "Highly effective — full adoption and great data hygiene", points: 3 },
      { text: "Average — used, but not consistently", points: 2 },
      { text: "Poor — it's more of a burden than a help", points: 1 }
    ]
  },
  {
    id: 4,
    title: "Team Capability",
    question: "How confident are you in your sales team's skills (discovery, closing, negotiation)?",
    options: [
      { text: "Very confident — consistent training and strong results", points: 3 },
      { text: "Moderately confident — some gaps, some stars", points: 2 },
      { text: "Not confident — we need serious skill upgrades", points: 1 }
    ]
  },
  {
    id: 5,
    title: "Pipeline Management",
    question: "Do you have visibility and control over your sales pipeline?",
    options: [
      { text: "Full visibility — we can accurately forecast", points: 3 },
      { text: "Somewhat — we track deals but forecasting is tough", points: 2 },
      { text: "Not really — pipeline is unclear or inconsistent", points: 1 }
    ]
  },
  {
    id: 6,
    title: "Leadership & Coaching",
    question: "How strong is your sales leadership or coaching framework?",
    options: [
      { text: "Strong — regular coaching and structured feedback", points: 3 },
      { text: "Mixed — some ad-hoc leadership, but no structure", points: 2 },
      { text: "Weak — leadership is mostly reactive or absent", points: 1 }
    ]
  },
  {
    id: 7,
    title: "Growth Potential",
    question: "If you solved your top challenges, how much do you think your revenue could grow in the next 12 months?",
    options: [
      { text: "50%+", points: 3 },
      { text: "20–50%", points: 2 },
      { text: "Less than 20%", points: 1 }
    ]
  }
];

export default function RevenueQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showIntro, setShowIntro] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCalendlyPopup = () => {
    trackEvent('calendly_opened', 'engagement', 'revenue_quiz_result');
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/cam-thegrowthengine/discovery-call-30-minutes'
      });
    }
  };

  const startQuiz = () => {
    trackEvent('quiz_started', 'engagement', 'revenue_quiz');
    setShowIntro(false);
  };

  const handleAnswer = (questionId: number, points: number) => {
    trackEvent('quiz_answer', 'engagement', `question_${questionId}`, points);
    const newAnswers = { ...answers, [questionId]: points };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: number]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, points) => sum + points, 0);
    const percentage = Math.round((totalScore / 21) * 100);
    
    let readinessLevel = "";
    let description = "";
    
    if (totalScore >= 18) {
      readinessLevel = "High Readiness";
      description = "You're close to scaling big — a few tweaks can unlock major growth.";
    } else if (totalScore >= 14) {
      readinessLevel = "Moderate Readiness";
      description = "Solid foundation, but key improvements could accelerate results.";
    } else {
      readinessLevel = "Low Readiness";
      description = "Big opportunities to tighten up your strategy, systems, and team.";
    }

    trackEvent('quiz_completed', 'conversion', readinessLevel, percentage);
    setResult({
      score: totalScore,
      percentage,
      readinessLevel,
      description,
      answers: finalAnswers
    });
    setShowResults(true);
  };

  const getAnswerSummary = (questionId: number) => {
    const question = questions.find(q => q.id === questionId);
    const points = answers[questionId];
    const option = question?.options.find(opt => opt.points === points);
    
    if (points === 3) return "Strong";
    if (points === 2) return "Moderate";
    return "Needs Improvement";
  };

  const getStrengths = () => {
    return questions
      .filter(q => answers[q.id] === 3)
      .map(q => q.title);
  };

  const getOpportunities = () => {
    return questions
      .filter(q => answers[q.id] === 1)
      .map(q => q.title);
  };

  const progress = showResults ? 100 : ((currentQuestion + 1) / questions.length) * 100;

  if (showIntro) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Revenue Readiness Quiz - The Growth Engine | Assess Your B2B Growth Potential"
          description="Take our 2-minute Revenue Readiness Quiz to discover how your B2B revenue engine is performing. Get personalized insights and actionable recommendations."
          keywords="revenue readiness quiz, B2B assessment, sales evaluation, revenue optimization, growth potential quiz"
          canonicalUrl="https://thegrowthengine.com.au/revenue-quiz"
        />
        <Navigation />
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Revenue Readiness Quiz
              </h1>
              <p className="text-xl text-white mb-8">
                Ready to see how your revenue engine is performing?
              </p>
              <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
                Answer 7 quick questions and get a personalised Revenue Readiness Score and key insights on how to accelerate your growth.
              </p>
              <p className="text-accent font-semibold mb-8 text-lg">(Takes less than 2 minutes)</p>
              <Button 
                onClick={startQuiz}
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 font-bold text-lg px-8 py-4"
              >
                START QUIZ
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Your Revenue Readiness Score
                </h1>
                <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 mb-8">
                  <div className="text-6xl font-bold mb-2">{result.percentage}%</div>
                  <div className="text-2xl font-semibold mb-2">{result.readinessLevel}</div>
                  <div className="text-lg">{result.description}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      Quick Snapshot
                    </h3>
                    <div className="space-y-3">
                      {questions.map(question => (
                        <div key={question.id} className="flex justify-between">
                          <span className="text-muted-foreground">{question.title}:</span>
                          <span className={`font-semibold ${
                            answers[question.id] === 3 ? 'text-green-600' : 
                            answers[question.id] === 2 ? '' : 'text-red-600'
                          }`}
                          style={answers[question.id] === 2 ? { color: '#fdd142' } : {}}>
                            {getAnswerSummary(question.id)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Quick Takeaways</h3>
                    
                    {getStrengths().length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-1" />
                          Key Strengths:
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          {getStrengths().map((strength, index) => (
                            <li key={index}>• {strength}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {getOpportunities().length > 0 && (
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-1" />
                          Opportunities for Growth:
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          {getOpportunities().map((opportunity, index) => (
                            <li key={index}>• {opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary mr-3" />
                      Want a deeper dive and a clear action plan?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Let's unlock your next stage of revenue growth with a personalized strategy session.
                    </p>
                    <Button 
                      onClick={openCalendlyPopup}
                      size="lg"
                      className="bg-primary text-muted-foreground hover:bg-primary/90 font-bold text-lg px-8 py-4"
                    >
                      BOOK A FREE CONSULTATION
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {question.title}
                </h2>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {question.question}
                </h1>

                <div className="space-y-4">
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(question.id, option.points)}
                      variant="outline"
                      className="w-full text-left justify-start p-6 h-auto hover:bg-primary/5 hover:border-primary transition-all duration-200"
                    >
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 mt-1 flex-shrink-0"></div>
                        <span className="text-base leading-relaxed">{option.text}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}