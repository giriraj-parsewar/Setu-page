"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Footer from "@/components/footer";
// INTERNAL DEPS ===============================================================
import { Button, Card, Div, Section, Heading2 } from "fictoan-react";
import { Brain, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

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
    "Gain a clear understanding of your financial health in the shortest time.",
    "Identify areas for improvement in your finances.",
    "Receive personalized strategies to achieve your financial goals.",
    "Track your progress over time with real-time updates.",
    "Make informed decisions about budgeting, saving, and investing.",
    "Reduce financial stress with AI-driven insights and recommendations.",
];

const SetusLandingPage = () => {
    return (
        <article id="page-setus">
            <Div id="hero" className="hero">
                <h1 className="text-white">Personal Finance Health AI</h1>
                <p className="p">Empower your financial decisions with AI-driven insights and personalized recommendations.</p>
                <Div className="hero-buttonsdiv">
                    <Button size="medium" shape="rounded" kind="primary" horizontalMargin="nano">
                        Start Your Assessment
                    </Button>
                    <Button size="medium" shape="rounded" kind="primary">
                        Learn More
                    </Button>
                </Div>
            </Div>

            <Div id="features" className="features">
                <Div className="container">
                    <h1 className="text-white features-heading">Key Features</h1>
                    <Div className="features-div">
                        {features.map((feature, index) => (
                            <Card bgColor="black" key={index} className="features-card">
                                <Div className="feature-icon-container">
                                    <feature.icon className="feature-icon" />
                                </Div>
                                <h2 className="feature-title">{feature.title}</h2>
                                <p className="feature-description">{feature.description}</p>
                            </Card>
                        ))}
                    </Div>
                </Div>
            </Div>

            <section id="benefits" className="benefits-section">
                <Div className="benefit-container">
                    <h1 className="benefits-heading">Benefits of Using Our AI</h1>
                    <Div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <Card key={index} bgColor="white" className="benefits-card">
                                <Div className="benefit-content">
                                    <CheckCircle className="benefit-icon" />
                                    <p className="benefit-text">{benefit}</p>
                                </Div>
                            </Card>
                        ))}
                    </Div>
                </Div>
            </section>

            <Section>
                <Div className="container">
                    <Heading2 className="text-white">Ready to Improve Your Financial Health?</Heading2>
                    <p className="text-white">
                        Start your journey towards financial wellness with our AI-powered assessment tool.
                    </p>
                    <Button shape="rounded" size="medium" className="hero-buttonsdiv" textColor="teal-dark10">
                        Get Your Free Assessment
                    </Button>
                </Div>
            </Section>

            <Footer />
        </article>
    );
};

export default SetusLandingPage;