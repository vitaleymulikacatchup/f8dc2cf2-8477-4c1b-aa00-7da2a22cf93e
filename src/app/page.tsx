"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About Us", id: "about" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Xeven"
          buttonText="Get Started"
          buttonVariant="hover-magnetic"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 p-8">
          <HeroBillboard
            title="Welcome to Xeven"
            description="Innovate your digital journey with neobrutalist design."
            imageSrc="asset://hero-image"
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-gray-100 text-black"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We design experiences with a neobrutalist touch"
            buttons={[{ text: "Our Story", href: "about" }]}
            className="bg-gray-100 text-black"
          />
        </div>
      </div>

      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Intuitive Design", description: "Crafting user-friendly interfaces with modern aesthetics.", icon: Zap },
              { title: "Robust Performance", description: "Ensuring reliability and speed under all conditions.", icon: Shield }
            ]}
            className="bg-gray-100 text-black"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Reach out for collaboration"
            description="Let's work together to create impactful designs."
            onSubmit={(email) => console.log(email)}
            className="bg-gray-100 text-black"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Privacy Policy", href: "privacy" }] },
              { items: [{ label: "Terms", href: "terms" }] }
            ]}
            logoText="Xeven"
            className="bg-gray-800 text-white"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}