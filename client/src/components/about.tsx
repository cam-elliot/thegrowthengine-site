import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import camPhoto from "@/assets/cam-elliot.jpg";

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={camPhoto} 
              alt="Cam Elliot - Founder & Principal Consultant" 
              className="rounded-2xl shadow-lg w-3/4 h-auto mx-auto" 
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">ABOUT THE FOUNDER</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Cam Elliot</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Founder & Principal Consultant
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Cam has spent over 20 years leading and scaling high-performance sales teams. As Country Director for GoodHabitz Australia and founder of Elevate Corporate Training, he has built businesses from the ground up and advised some of the fastest-growing B2B companies in Australia.
              </p>
              <p className="text-lg text-muted-foreground mb-8">Cam's unique strength lies in combining strategic thinking with frontline leadership experience - helping clients move from chaos to clarity, from potential to performance.</p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Connect with Cam
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
