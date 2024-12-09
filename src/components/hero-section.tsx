import { Element,Button } from "fictoan-react"

export function HeroSection() {
  return (
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
  )
}
