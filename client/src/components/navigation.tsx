import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import OptimizedLogo from "./optimized-logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Load Calendly CSS and JS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // Initialize Calendly badge widget with your brand colors
      if ((window as any).Calendly) {
        (window as any).Calendly.initBadgeWidget({ 
          url: 'https://calendly.com/cam-thegrowthengine/discovery-call-30-minutes', 
          text: 'BOOK DISCOVERY CALL', 
          color: '#6b7280', // Your grey brand color
          textColor: '#ffffff' 
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingLink) document.head.removeChild(existingLink);
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const openCalendlyPopup = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/cam-thegrowthengine/discovery-call-30-minutes?primary_color=6b7280&text_color=1f2937&background_color=ffffff'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-primary via-secondary to-primary text-white shadow-xl sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-3 bg-[#41444a]">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <OptimizedLogo 
                  className="h-36 w-auto object-contain"
                  priority={true}
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services">
              <button className="text-white hover:text-accent font-bold text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1">
                SERVICES
              </button>
            </Link>
            <Link href="/about">
              <button className="text-white hover:text-accent font-bold text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1">
                ABOUT
              </button>
            </Link>
            <Link href="/faq">
              <button className="text-white hover:text-accent font-bold text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1">
                FAQ
              </button>
            </Link>
            <Link href="/revenue-quiz">
              <button className="text-white hover:text-accent font-bold text-lg px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-1">
                QUIZ
              </button>
            </Link>
            <button 
              onClick={openCalendlyPopup}
              className="px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-accent text-accent hover:bg-accent hover:text-primary shadow-lg hover:shadow-2xl transform hover:-translate-y-1 whitespace-nowrap"
            >
              BOOK DISCOVERY CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 px-4 bg-gradient-to-b from-primary/95 to-secondary/95 backdrop-blur-lg">
            <Link href="/services">
              <button className="block w-full text-left px-6 py-4 text-white font-bold text-lg rounded-xl hover:text-accent hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                SERVICES
              </button>
            </Link>
            <Link href="/about">
              <button className="block w-full text-left px-6 py-4 text-white font-bold text-lg rounded-xl hover:text-accent hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                ABOUT
              </button>
            </Link>
            <Link href="/faq">
              <button className="block w-full text-left px-6 py-4 text-white font-bold text-lg rounded-xl hover:text-accent hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                FAQ
              </button>
            </Link>
            <Link href="/revenue-quiz">
              <button className="block w-full text-left px-6 py-4 text-white font-bold text-lg rounded-xl hover:text-accent hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                QUIZ
              </button>
            </Link>
            <div className="pt-2">
              <button 
                onClick={openCalendlyPopup}
                className="w-full px-6 py-4 border-2 border-accent text-accent rounded-xl font-bold text-lg hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                BOOK DISCOVERY CALL
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
