import SEO from "@/components/seo";
import StructuredData from "@/components/structured-data";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import WhoWeHelp from "@/components/who-we-help";
import Services from "@/components/services";
import HowWeDeliver from "@/components/how-we-deliver";
import WhyUs from "@/components/why-us";
import About from "@/components/about";
import QuizCTA from "@/components/quiz-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="The Growth Engine - B2B Revenue Optimization Consulting | Sales & Marketing Strategy"
        description="Transform your B2B revenue with our proven strategies. We help ambitious businesses accelerate growth through sales optimization, go-to-market strategy, and leadership development. Book your discovery call today."
        keywords="B2B revenue optimization, sales consulting, marketing strategy, go-to-market, sales system optimization, leadership development, fractional revenue leadership, revenue recruitment, business growth"
        canonicalUrl="https://thegrowthengine.com.au"
      />
      <StructuredData type="Organization" data={{}} />
      <Navigation />
      <Hero />
      <WhoWeHelp />
      <Services />
      <HowWeDeliver />
      <WhyUs />
      <About />
      <QuizCTA />
      <Contact />
      <Footer />
    </div>
  );
}
