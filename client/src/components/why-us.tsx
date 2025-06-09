import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Users, Settings, Target, Zap } from "lucide-react";

const whyUsPoints = [
  "We combine strategy with hands-on execution.",
  "We bring over 20 years' experience scaling businesses.",
  "We embed with your team to drive real outcomes.",
  "We build systems that continue delivering after we're gone."
];

const results = [
  {
    icon: TrendingUp,
    title: "Increased revenue traction and velocity",
    iconColor: "text-primary"
  },
  {
    icon: Users,
    title: "Higher-performing sales teams",
    iconColor: "text-accent"
  },
  {
    icon: Settings,
    title: "Cleaner, scalable sales operations",
    iconColor: "text-blue-500"
  },
  {
    icon: Target,
    title: "Stronger leadership and commercial capability",
    iconColor: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Reduced hiring risk and faster onboarding",
    iconColor: "text-orange-500"
  }
];

export default function WhyUs() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">WHY THE GROWTH ENGINE?</h2>
            <div className="space-y-6 mb-8">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <p className="text-lg text-foreground">{point}</p>
                </div>
              ))}
            </div>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              See How We Work
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Results you can expect:</h3>
            <div className="space-y-4">
              {results.map((result, index) => (
                <Card key={index} className="bg-white border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <result.icon className="text-white h-6 w-6" />
                      </div>
                      <p className="text-foreground font-medium">{result.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}