import {Element, Button , Div, Section,  Heading2 } from "fictoan-react"

export function CTASection() {
  return (
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
  )
}

