import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BarChart3, Podcast } from "lucide-react";

const resources = [
  {
    icon: Download,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    title: "GTM Strategy Framework",
    description: "Our proven framework for developing go-to-market strategies that drive scalable growth.",
    buttonText: "Download Free Guide"
  },
  {
    icon: BarChart3,
    iconColor: "text-purple-500", 
    iconBg: "bg-purple-500/10",
    title: "Revenue Diagnostic Tool",
    description: "Assess your current revenue operations and identify key areas for improvement.",
    buttonText: "Start Free Assessment"
  },
  {
    icon: Podcast,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10", 
    title: "Growth Engine Podcast",
    description: "Weekly insights from industry leaders on scaling B2B businesses effectively.",
    buttonText: "Listen Now"
  }
];

export default function Resources() {
  const handleResourceClick = (title: string) => {
    alert(`${title} will be available soon!`);
  };

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Resources & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our frameworks, guides, and thought leadership to accelerate your growth journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${resource.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <resource.icon className={`${resource.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button 
                  onClick={() => handleResourceClick(resource.title)}
                  className="w-full bg-primary text-muted-foreground hover:bg-primary/90"
                >
                  {resource.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
