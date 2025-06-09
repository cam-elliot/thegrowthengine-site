import { useEffect } from "react";
import SEO from "@/components/seo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - The Growth Engine | Data Protection & Privacy"
        description="Read The Growth Engine's privacy policy. Learn how we collect, use, and protect your personal information when you use our B2B revenue optimization services."
        keywords="privacy policy, data protection, The Growth Engine privacy, information security"
        canonicalUrl="https://thegrowthengine.com.au/privacy-policy"
        noIndex={true}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Effective Date: 6 June 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              At The Growth Engine, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">What We Collect</h2>
            <ul className="text-muted-foreground mb-8 space-y-2">
              <li>Name, email address, and contact information when you submit forms or communicate with us</li>
              <li>Business information shared during consultations or service engagements</li>
              <li>Website usage data collected via cookies (for analytics and performance purposes)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <ul className="text-muted-foreground mb-8 space-y-2">
              <li>To provide, operate, and improve our services</li>
              <li>To communicate with you about your project or inquiry</li>
              <li>To send occasional updates or newsletters (you can opt out at any time)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
            <p className="text-muted-foreground mb-8">
              We implement reasonable security measures to protect your personal data from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Sharing Your Information</h2>
            <p className="text-muted-foreground mb-8">
              We do not sell, trade, or rent your personal information. We may share information with trusted third parties who assist us in delivering services, as long as they agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p className="text-muted-foreground mb-8">
              Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-8">
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at info@thegrowthengine.com.au.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground mb-8">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about this Privacy Policy, please contact:<br />
              Email: info@thegrowthengine.com.au
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}