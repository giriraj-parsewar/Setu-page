import { Element, Div } from "fictoan-react";
import Link from "next/link";
import {Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <Element as="footer" id="footer" className="site-footer">
      <Div className="footer-container">
        {/* Logo Section */}
        <Div className="footer-logo">
          <Link href="/" className="logo">
            <Element as="span" className="logo-text">SETU</Element>
          </Link>
          <Element as="p" className="footer-tagline">
            Empowering your financial decisions.
          </Element>
        </Div>

        {/* Navigation Links */}
        <Div className="footer-links">
          <Link href="#features" className="footer-link">Features</Link>
          <Link href="#how-it-works" className="footer-link">How It Works</Link>
          <Link href="#benefits" className="footer-link">Benefits</Link>
          <Link href="/contact" className="footer-link">Contact Us</Link>
        </Div>

        {/* Social Media Links */}
        <Div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Facebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Twitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin className="social-icon" />
          </a>
        </Div>
      </Div>

     
    </Element>
  );
}
