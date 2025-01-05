"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Footer  from "@/components/footer";
// INTERNAL DEPS ===============================================================
import { Element, Button ,Card, Div, Section,  Heading2 } from "fictoan-react";
import { Brain, TrendingUp, Shield, Zap , CheckCircle} from 'lucide-react';

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Our advanced AI algorithms analyze your financial data to provide accurate insights.",
    icon: Brain,
  },
  {
    title: "Personalized Recommendations",
    description: "Get tailored advice to improve your financial health based on your unique situation.",
    icon: TrendingUp,
  },
  {
    title: "Secure and Private",
    description: "Your financial data is encrypted and protected with bank-level security measures.",
    icon: Shield,
  },
  {
    title: "Real-Time Updates",
    description: "Receive instant updates on your financial health score as your situation changes.",
    icon: Zap,
  },
];


const benefits = [
  "Gain a clear understanding of your financial health",
  "Identify areas for improvement in your finances",
  "Receive personalized strategies to achieve your financial goals",
  "Track your progress over time with real-time updates",
  "Make informed decisions about budgeting, saving, and investing",
  "Reduce financial stress with AI-driven insights and recommendations",
];

const SetusLandingPage = () => {
  return (
    <Element as="article" id="page-setus">
       <Element as="div" id="hero" horizontallyCentreThis className="hero">
            <Element as="h1" horizontallyCentreThis textColour="white">
              Personal Finance Health AI
            </Element>
            <Element as="p" className="p" horizontallyCentreThis>
              Empower your financial decisions with AI-driven insights and personalized recommendations.
            </Element>
            <Element as="div" className="hero-buttonsdiv" horizontallyCentreThis >
              <Button size="medium"  shape="rounded" kind="primary" horizontalMargin="nano" >
                Start Your Assessment
              </Button>
              <Button size="medium"  shape="rounded" kind="primary">
                Learn More
              </Button>
            </Element>
          </Element>
      <Element as="div" id="features" className="features">
            <Element as="div" className="container">
              <Element as="h1" horizontallyCenterThis textColor="white" className="features-heading">
                Key Features
              </Element>
              <Element as="div" className="features-div">
                {features.map((feature, index) => (
                  <Card bgColor="black" key={index} className="features-card">
                    <Element as="div" className="feature-icon-container">
                      <feature.icon className="feature-icon" />
                    </Element>
                    <Element as="h2" className="feature-title">
                      {feature.title}
                    </Element>
                    <Element as="p" className="feature-description">
                      {feature.description}
                    </Element>
                  </Card>
                ))}
              </Element>
            </Element>
          </Element>
      <Element as="section" id="benefits" className="benefits-section">
            <Element as="div" className="benefit-container">
              <Element as="h1" horizontallyCenterThis className="benefits-heading">
                Benefits of Using Our AI
              </Element>
              <Div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <Card key={index} bgColor="white" className="benefits-card">
                    <Div className="benefit-content">
                      <CheckCircle className="benefit-icon" />
                      <Element as="p" className="benefit-text">
                        {benefit}
                      </Element>
                    </Div>
                  </Card>
                ))}
              </Div>
            </Element>
          </Element>
      <Section>
            <Div className="container ">
              <Heading2 textColor="white" horizontallyCentreThis>Ready to Improve Your Financial Health?</Heading2>
              <Element textColor="white" as="p" >
                Start your journey towards financial wellness with our AI-powered assessment tool.
              </Element >
              <Button shape="rounded" size="medium" className="hero-buttonsdiv" textColor="teal-dark10" >
                Get Your Free Assessment
              </Button>
            </Div>
          </Section>
      <Footer />
    </Element>
  );
};

export default SetusLandingPage;