import { Element, Card, Div } from "fictoan-react";
import { CheckCircle } from "lucide-react"

const benefits = [
  "Gain a clear understanding of your financial health",
  "Identify areas for improvement in your finances",
  "Receive personalized strategies to achieve your financial goals",
  "Track your progress over time with real-time updates",
  "Make informed decisions about budgeting, saving, and investing",
  "Reduce financial stress with AI-driven insights and recommendations",
];

export default function BenefitsSection() {
  return (
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
  );
}
