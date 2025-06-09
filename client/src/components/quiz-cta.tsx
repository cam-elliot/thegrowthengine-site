import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Target } from "lucide-react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function QuizCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-max">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-accent/20 rounded-full p-4">
                  <TrendingUp className="h-12 w-12 text-accent" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#fdd142' }}>
                HOW READY IS YOUR REVENUE ENGINE?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take our 2-minute Revenue Readiness Quiz and discover exactly where your business stands—plus get a personalized action plan to accelerate growth.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5" style={{ color: '#fdd142' }} />
                  <span className="font-medium" style={{ color: '#fdd142' }}>2 Minutes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Target className="h-5 w-5" style={{ color: '#fdd142' }} />
                  <span className="font-medium" style={{ color: '#fdd142' }}>7 Quick Questions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="h-5 w-5" style={{ color: '#fdd142' }} />
                  <span className="font-medium" style={{ color: '#fdd142' }}>Instant Results</span>
                </div>
              </div>

              <Link href="/revenue-quiz">
                <Button 
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => trackEvent('quiz_cta_clicked', 'conversion', 'homepage_quiz_section')}
                >
                  TAKE THE QUIZ NOW
                </Button>
              </Link>
              
              <p className="text-sm text-blue-200 mt-4">
                Free • No email required • Instant personalized insights
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}