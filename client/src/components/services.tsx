import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Target, 
  Settings, 
  Users, 
  TrendingUp, 
  UserPlus,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Go-to-Market Strategy",
    description: "Crafting clear, actionable plans to attack the right markets with the right message.",
    iconColor: "text-primary",
    link: "/services/go-to-market"
  },
  {
    icon: Settings,
    title: "Sales System Optimisation",
    description: "Building scalable sales processes and tech stacks for consistent conversion.",
    iconColor: "text-accent",
    link: "/services/sales-optimization"
  },
  {
    icon: Users,
    title: "Leadership & Team Capability Development",
    description: "Coaching, training, and developing the people who drive growth.",
    iconColor: "text-blue-500",
    link: "/services/leadership-development"
  },
  {
    icon: TrendingUp,
    title: "Fractional Revenue Leadership",
    description: "Senior leadership support without full-time overhead.",
    iconColor: "text-purple-500",
    link: "/services/fractional-leadership"
  },
  {
    icon: UserPlus,
    title: "Revenue-Focused Recruitment",
    description: "Finding and onboarding the right talent to fuel your growth.",
    iconColor: "text-orange-500",
    link: "/services/revenue-recruitment"
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">WHAT WE OFFER</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card className="bg-white border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20 cursor-pointer group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:opacity-90 bg-primary"
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-primary mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center text-accent font-medium group-hover:text-accent/80 transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
