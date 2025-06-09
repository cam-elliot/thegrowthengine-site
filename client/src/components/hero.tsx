import { Button } from "@/components/ui/button";
import heroVideo from "@assets/AdobeStock_1252563600_1749422662693.mp4";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const scrollToContact = () => {
    trackEvent('contact_cta_clicked', 'conversion', 'hero_section');
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23334155'/%3E%3C/svg%3E"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The Growth Engine
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-accent mb-8">DRIVING REVENUE</p>
          <p className="text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto">We help B2B businesses unlock scalable, sustainable revenue growth by aligning people, process, and platforms</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-muted-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold h-14"
            >
              Get Started
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="border-2 px-8 py-4 text-lg font-semibold h-14"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                borderColor: '#ffffff',
                backdropFilter: 'blur(10px)'
              }}
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
