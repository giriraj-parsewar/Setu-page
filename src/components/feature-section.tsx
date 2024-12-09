import { Element, Card } from "fictoan-react";
import { Brain, TrendingUp, Shield, Zap } from 'lucide-react';

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

export default function FeaturesSection() {
  return (
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
  );
}
