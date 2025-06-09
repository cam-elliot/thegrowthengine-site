import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    category: "SaaS STARTUP",
    title: "300% Revenue Growth",
    description: "Complete GTM strategy overhaul for Series A startup, resulting in 3x revenue growth and successful Series B raise."
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    category: "MANUFACTURING",
    title: "Sales Team Transformation",
    description: "Restructured sales operations and implemented new CRM system, increasing close rates by 45%."
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    category: "CONSULTING",
    title: "Fractional CRO Success",
    description: "Provided fractional CRO services during scaling phase, establishing processes for sustainable growth."
  }
];

export default function CaseStudies() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding gradient-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their revenue operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{study.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Button 
                  variant="ghost" 
                  onClick={scrollToContact}
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
