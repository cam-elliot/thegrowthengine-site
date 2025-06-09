import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Target, Cog, Users, CheckCircle, Clock, ArrowRight, ArrowDown, Handshake } from "lucide-react";

const spotlightPillars = [
  {
    title: "Growth Strategy",
    icon: Target,
    color: "text-blue-600"
  },
  {
    title: "Operational Excellence", 
    icon: Cog,
    color: "text-green-600"
  },
  {
    title: "Tech Enablement",
    icon: Search,
    color: "text-purple-600"
  },
  {
    title: "People & Performance",
    icon: Users,
    color: "text-orange-600"
  }
];

const spotlightOutcomes = [
  {
    number: "1",
    title: "Assessment on a Page",
    description: "A clear, action-focused diagnosis of your current revenue performance — and the untapped potential ready for growth."
  },
  {
    number: "2", 
    title: "10–12 Revenue Initiatives",
    description: "A tailored set of strategic initiatives based on the assessment, designed to address gaps and unlock new opportunities."
  },
  {
    number: "3",
    title: "6 Prioritised Revenue Accelerators",
    description: "Selected in collaboration with your leadership team — the high-impact initiatives that will drive the most immediate and meaningful results."
  }
];

const acceleratorSteps = [
  {
    number: "1",
    title: "Engage relevant stakeholders",
    description: "Who needs to be involved to create the best outcomes"
  },
  {
    number: "2",
    title: "Define scope of 6 revenue initiatives", 
    description: "What needs to be done, and when will it be complete"
  },
  {
    number: "3",
    title: "Roll up the sleeves",
    description: "Work in conjunction with your teams to deliver on the 6 initiatives"
  },
  {
    number: "4",
    title: "Handover the keys to revenue success",
    description: "Sign off on completed initiatives and delegate remaining implementations or ongoing initiatives"
  }
];

export default function HowWeDeliver() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HOW WE DELIVER</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology combines rapid assessment with hands-on implementation to accelerate your revenue growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 5 Day Revenue Spotlight */}
          <Card className="bg-white border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                  <Clock className="w-4 h-4 mr-2" />
                  5 Days
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">REVENUE SPOTLIGHT</h3>
                <p className="text-muted-foreground">Illuminating your path to sustainable revenue growth</p>
              </div>

              {/* 4 Pillars */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {spotlightPillars.map((pillar, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-accent border-2 border-accent">
                    <pillar.icon className="text-white h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-bold text-muted-foreground">{pillar.title}</p>
                  </div>
                ))}
              </div>

              {/* Outcomes */}
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground mb-4">Revenue Spotlight Outcomes</h4>
                {spotlightOutcomes.map((outcome, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {outcome.number}
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">{outcome.title}</h5>
                        <p className="text-sm text-muted-foreground">{outcome.description}</p>
                      </div>
                    </div>
                    {index < spotlightOutcomes.length - 1 && (
                      <div className="flex justify-center my-4">
                        <ArrowDown className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 5 Week Revenue Accelerator */}
          <Card className="bg-white border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  5 Weeks
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">REVENUE ACCELERATOR</h3>
                <p className="text-muted-foreground mb-4">
                  Hands on Implementation
                </p>
              </div>

              {/* Implementation Steps */}
              <div className="space-y-6">
                {acceleratorSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {step.number}
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">{step.title}</h5>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    {index < acceleratorSteps.length - 1 && (
                      <div className="flex justify-center my-4">
                        <ArrowDown className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-2 text-primary">
                  <Handshake className="h-5 w-5" />
                  <span className="font-medium">Complete Implementation</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  We work alongside your team to ensure successful delivery and sustainable results
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Question</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Do we need to purchase the Revenue Accelerator if we just want the Revenue Spotlight?
                </h4>
                <div className="ml-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Answer - appears on hover */}
              <div className="mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 ease-in-out">
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-muted-foreground">
                    It's up to you. Choose to go all in with the process and launch a 6 week attack on revenue or start with the spotlight and decide later to proceed with the accelerator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}