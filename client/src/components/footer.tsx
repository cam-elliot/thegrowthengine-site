import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import OptimizedLogo from "./optimized-logo";

export default function Footer() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <OptimizedLogo 
                className="h-36 w-auto object-contain block"
                priority={false}
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We help B2B businesses unlock scalable, sustainable revenue growth by aligning people, process, and platforms.
            </p>
            <div className="mb-6">
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                Got questions? We've got answers
              </Link>
            </div>
            <div className="flex space-x-4">
              <Button
                size="icon"
                className="w-10 h-10 bg-primary rounded-full hover:bg-primary/80"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                className="w-10 h-10 bg-primary rounded-full hover:bg-primary/80"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                className="w-10 h-10 bg-primary rounded-full hover:bg-primary/80"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/go-to-market" className="hover:text-white transition-colors duration-200">Go-to-Market Strategy</Link></li>
              <li><Link href="/services/sales-optimization" className="hover:text-white transition-colors duration-200">Sales System Optimisation</Link></li>
              <li><Link href="/services/leadership-development" className="hover:text-white transition-colors duration-200">Leadership Development</Link></li>
              <li><Link href="/services/fractional-leadership" className="hover:text-white transition-colors duration-200">Fractional Revenue Leadership</Link></li>
              <li><Link href="/services/revenue-recruitment" className="hover:text-white transition-colors duration-200">Revenue Recruitment</Link></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors duration-200">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2024 The Growth Engine. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
