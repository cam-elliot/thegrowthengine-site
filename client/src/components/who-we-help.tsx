import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const clientTypes = [
  "B2B sales teams aiming for exponential growth",
  "VC-backed startups post-Series A looking to accelerate revenue",
  "Scaling SaaS and professional services firms sharpening their go-to-market", 
  "Founder-led businesses preparing for the next stage of growth"
];

export default function WhoWeHelp() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">WHO WE HELP</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We partner with ambitious, growth-focused B2B companies that are ready to scale smarter and faster, including:
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                {clientTypes.map((type, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-white h-4 w-4" />
                    </div>
                    <p className="text-lg text-foreground">{type}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg text-muted-foreground mb-4">We deliver the most impact for organisations with lean sales teams - typically between 0 and 15 salespeople - where building the right systems, strategy, and leadership unlocks real, scalable growth.</p>
                <p className="text-lg font-medium text-foreground text-center">
                  Looking to build a revenue machine that scales? You're in the right place.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}