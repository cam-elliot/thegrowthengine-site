import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    // Lazy load Calendly widget script after component mounts
    let loaded = false;
    const loadCalendly = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };
    
    // Load on user interaction or after 5 seconds
    const timer = setTimeout(loadCalendly, 5000);
    ['click', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, loadCalendly, { once: true, passive: true });
    });

    return () => {
      clearTimeout(timer);
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            SCHEDULE YOUR DISCOVERY CALL
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Ready to transform your revenue performance? Book a 30-minute discovery call to explore how we can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendly Widget */}
          <div className="bg-white rounded-lg p-2">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/cam-thegrowthengine/discovery-call-30-minutes?primary_color=2563eb&text_color=1f2937&background_color=ffffff"
              style={{
                minWidth: '320px',
                height: '700px',
                borderRadius: '8px'
              }}
            ></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
              <div className="space-y-4 text-primary">
                <div>
                  <p className="font-semibold">Cam Elliot</p>
                  <p>Founder, The Growth Engine</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@thegrowthengine.com.au</span>
                </div>
                <div>
                  <p>thegrowthengine.com.au</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">What to Expect</h4>
              <div className="space-y-3 text-primary">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>30-minute strategic discussion about your revenue goals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Assessment of your current sales and marketing systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Customized recommendations for your business</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Clear next steps to accelerate your growth</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-muted-foreground">Connect with us</h4>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-muted-foreground hover:bg-white hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-muted-foreground hover:bg-white hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}