"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Mail, Phone, MapPin } from "lucide-react";

export default function MarketingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="MarketHub"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Case Studies", id: "testimonials" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Marketing Excellence"
          title="Transform Your Brand Into a Market Leader"
          description="Strategic marketing solutions that drive growth, engagement, and measurable results for ambitious businesses ready to dominate their market."
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Explore Services", href: "services" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880861042-9y9z1yc6.jpg"
          imageAlt="Marketing team strategy planning office"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="We partner with innovative brands to unlock their full potential through data-driven marketing strategies, creative excellence, and unwavering commitment to your success. Every campaign is crafted with precision and passion to deliver extraordinary results."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Our Core Services"
          description="Comprehensive marketing solutions tailored to elevate your brand and achieve measurable growth"
          tag="Services"
          features={[
            {
              id: 1,
              title: "SEO & Search Marketing",
              description: "Dominate search results with advanced optimization strategies and targeted paid campaigns that drive qualified traffic and conversions.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880861904-q62stohu.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880861904-q62stohu.jpg"
              }
            },
            {
              id: 2,
              title: "Social Media Management",
              description: "Build engaged communities and amplify your brand voice across platforms with strategic content and authentic audience connections.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880862747-bf2o6n1z.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880862747-bf2o6n1z.jpg"
              }
            },
            {
              id: 3,
              title: "Analytics & Insights",
              description: "Transform data into actionable intelligence with comprehensive analytics that guide strategy and prove marketing ROI at every touchpoint.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880863717-b1rdpmo7.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880863717-b1rdpmo7.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Real results from real clients who trusted us to elevate their brands"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CMO",
              company: "TechVenture Inc.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880864562-8l3a81hw.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "EcommercePro",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880865466-35acu3at.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Brand Manager",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880866717-wf7sq3p3.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "CEO",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880867583-22c7pf04.jpg"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of brands that have transformed their marketing with our expertise"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880868387-sndn7r4e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880869268-7wz76jid.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880870514-vp3zrhhu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880871147-6yduh0z4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880871972-jia4n2hw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880872760-8jkdqdf9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880873395-yhfzssiz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765880874097-f5b7zr3x.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our marketing services and how we can help your business grow"
          faqs={[
            {
              id: "1",
              title: "How do you determine marketing strategy?",
              content: "We start with a comprehensive audit of your current presence, competitive landscape, and business goals. Our team conducts in-depth market research and uses data-driven insights to craft a customized strategy aligned with your objectives and budget."
            },
            {
              id: "2",
              title: "What results can I expect?",
              content: "Results vary by industry and goals, but our clients typically see increased brand awareness, improved search rankings, higher engagement rates, and increased conversions within the first 3-6 months. We provide detailed monthly reports tracking all key metrics."
            },
            {
              id: "3",
              title: "How long is the typical engagement?",
              content: "Most clients start with a 6-month engagement to establish foundation and see meaningful results. Many continue long-term as marketing is an ongoing process. We're flexible and can adjust terms based on your needs."
            },
            {
              id: "4",
              title: "Do you work with small businesses?",
              content: "Absolutely! We love working with ambitious small businesses and startups. We have service packages designed specifically for growing companies with limited marketing budgets who need maximum impact."
            },
            {
              id: "5",
              title: "What platforms do you specialize in?",
              content: "We're experts across all major platforms including Google Ads, Facebook/Instagram, LinkedIn, TikTok, and emerging channels. We recommend the best mix for your specific audience and goals."
            },
            {
              id: "6",
              title: "How do you report on progress?",
              content: "We provide comprehensive monthly reports with all key metrics, insights, and recommendations. You'll have direct access to our team for questions and strategy discussions."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Marketing?"
          description="Let's discuss how we can elevate your brand and drive measurable growth. Fill out the form below and our team will reach out within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "service",
              type: "text",
              placeholder: "Service of Interest",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your marketing goals and challenges...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="MarketHub"
          columns={[
            {
              title: "Services",
              items: [
                { label: "SEO Services", href: "#services" },
                { label: "Social Media", href: "#services" },
                { label: "Analytics", href: "#services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Case Studies", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Marketing Blog", href: "#" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          title="Let's build something extraordinary together"
          contactItems={[
            {
              icon: Mail,
              text: "hello@markethub.com"
            },
            {
              icon: Phone,
              text: "(555) 123-4567"
            },
            {
              icon: MapPin,
              text: "123 Marketing Street, Business City, BC 12345"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}