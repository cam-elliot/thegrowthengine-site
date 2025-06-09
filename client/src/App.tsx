import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import FAQPage from "@/pages/faq";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";
import RevenueQuiz from "@/pages/revenue-quiz";
import GoToMarketStrategy from "@/pages/services/go-to-market";
import SalesOptimization from "@/pages/services/sales-optimization";
import LeadershipDevelopment from "@/pages/services/leadership-development";
import FractionalLeadership from "@/pages/services/fractional-leadership";
import RevenueRecruitment from "@/pages/services/revenue-recruitment";
import { useAnalytics } from "./hooks/use-analytics";
import { initGA } from "./lib/analytics";
import NotFound from "@/pages/NotFound"

import PerformanceMonitor from "./components/performance-monitor";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/revenue-quiz" component={RevenueQuiz} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/services/go-to-market" component={GoToMarketStrategy} />
      <Route path="/services/sales-optimization" component={SalesOptimization} />
      <Route path="/services/leadership-development" component={LeadershipDevelopment} />
      <Route path="/services/fractional-leadership" component={FractionalLeadership} />
      <Route path="/services/revenue-recruitment" component={RevenueRecruitment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceMonitor />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
