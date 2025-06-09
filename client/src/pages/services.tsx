import { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Target, 
  Cog, 
  Users, 
  ArrowRight, 
  Clock, 
  Handshake,
  UserCheck,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import heroVideo from "@assets/AdobeStock_359657505 (1)_1749452574914.mp4";

export default function ServicesPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const spotlightFeatures = [
    "Assessment on a Page: A clear, concise diagnosis of your current and potential revenue performance.",
    "10–12 Revenue Initiatives: Specific, actionable initiatives based on your assessment.",
    "6 Prioritised Revenue Accelerators: Selected in collaboration with your leadership team to drive the most immediate impact."
  ];

  const acceleratorSteps = [
    "Engage Relevant Stakeholders: Identify and align the key players for success.",
    "Define Scope and Timelines: Outline exactly what needs to be done and when.",
    "Hands-on Delivery: Collaborate directly with your teams to embed the solutions.",
    "Handover to Revenue Success: Finalise completed initiatives and empower your team for ongoing growth."
  ];

  const fractionalBenefits = [
    "Immediate access to senior leadership capability",
    "Strategic design and hands-on revenue execution",
    "A trusted partner driving growth from the inside"
  ];

  const recruitmentFeatures = [
    "Targeted sourcing of top sales and commercial talent",
    "Competency-based hiring frameworks", 
    "High-impact onboarding strategies to fast-track performance"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="B2B Revenue Optimization Services | Go-to-Market & Sales Strategy | The Growth Engine"
        description="Expert B2B revenue optimization services including 5-Day Revenue Spotlight, go-to-market strategy, sales system optimization, fractional leadership, and revenue recruitment."
        keywords="B2B revenue optimization services, go-to-market strategy, sales system optimization, fractional revenue leadership, revenue recruitment, 5-day revenue spotlight"
        canonicalUrl="https://thegrowthengine.com.au/services"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="relative section-padding text-white overflow-hidden bg-primary">
        {/* Video Background */}
        <video 
          key="services-hero-video-mp4"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white mb-8">
              Comprehensive revenue solutions designed to unlock your growth potential
            </p>
          </div>
        </div>
      </section>
      {/* 5-Day Revenue Spotlight */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                <Clock className="w-4 h-4 mr-2" />
                5 Days
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">5-DAY REVENUE SPOTLIGHT</h2>
              <p className="text-xl text-primary font-semibold mb-6">Shining the Light on Revenue Performance</p>
              <p className="text-lg text-muted-foreground mb-8">
                The 5-Day Revenue Spotlight is our fast, focused diagnostic designed to assess the four pillars critical to your revenue growth: Growth Strategy, Operational Excellence, Tech Enablement, and People & Performance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                In just one week, we uncover the real drivers and blockers to your revenue success, delivering a clear, action-oriented roadmap to scale.
              </p>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Book Your Spotlight
              </Button>
            </div>
            <Card className="bg-muted/30 border-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">What You Get:</h3>
                <div className="space-y-4">
                  {spotlightFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* 5-Week Revenue Accelerator */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-white border-2 order-2 lg:order-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">What We Do:</h3>
                <div className="space-y-4 mb-6">
                  {acceleratorSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Outcome:</strong> A tangible boost to revenue capability and momentum — without adding headcount or complexity.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                <ArrowRight className="w-4 h-4 mr-2" />
                5 Weeks
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">5-WEEK REVENUE ACCELERATOR</h2>
              <p className="text-xl text-primary font-semibold mb-6">From Diagnosis to Execution</p>
              <p className="text-lg text-muted-foreground mb-8">
                The Revenue Accelerator takes the insights from your Spotlight and turns them into real-world results. Over five weeks, we roll up our sleeves and work alongside your teams to implement the top 6 revenue initiatives.
              </p>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Start Accelerating
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Fractional Revenue Leadership */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                <UserCheck className="w-4 h-4 mr-2" />
                Leadership
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">FRACTIONAL REVENUE LEADERSHIP</h2>
              <p className="text-xl text-primary font-semibold mb-6">Senior Leadership Support - Without the Full-Time Overhead</p>
              <p className="text-lg text-muted-foreground mb-8">Get the expertise of a Chief Revenue Officer without the long-term commitment. We step in to design and drive your revenue strategy, lead teams, and build systems that scale - all at a fraction of the cost of a full-time hire.</p>
              <p className="text-lg text-muted-foreground mb-8">Perfect for scaling businesses that need commercial firepower to reach the next level - fast.</p>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Enquire About Fractional Leadership
              </Button>
            </div>
            <Card className="bg-muted/30 border-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">What You Get:</h3>
                <div className="space-y-4">
                  {fractionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Revenue-Focused Recruitment */}
      <section className="section-padding bg-muted/50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-white border-2 order-2 lg:order-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">What You Get:</h3>
                <div className="space-y-4 mb-6">
                  {recruitmentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">Recruitment that's aligned to revenue - not just resumes.</p>
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 text-sm font-semibold px-4 py-2 bg-accent text-primary border-accent">
                <TrendingUp className="w-4 h-4 mr-2" />
                Recruitment
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">REVENUE-FOCUSED RECRUITMENT</h2>
              <p className="text-xl text-primary font-semibold mb-6">Building the Team That Builds Your Revenue</p>
              <p className="text-lg text-muted-foreground mb-8">The right people drive the right results. We help you find, hire, and onboard high-performing sales and revenue leadership talent - not just filling roles, but finding the right fit for your growth ambitions.</p>
              <Button 
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Find Your Growth Team
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md md:max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Get Started</h3>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => setShowContactForm(false)}
                >
                  ✕
                </Button>
              </div>
              <Contact />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}