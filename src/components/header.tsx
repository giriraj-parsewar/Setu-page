"use client";

import { Element,Row, Button, Text, Portion, useTheme, Heading3 , Div} from "fictoan-react";
import Link from "next/link";
import { Moon, Sun } from 'lucide-react';
import { ThemeProvider } from "@/contexts/theme-context";



export const Header = () => {
    const { theme, setTheme } = useTheme()
    
    const toggleTheme = () => {
        if (theme === "theme-light") {
            setTheme("theme-dark");
        } else {
            setTheme("theme-light");
        }
    };

  

  return (
    <Element as="header" className="header">
    <Element
        as="div"
        className="header-div"
    >
        <Element as="div" >
            <Heading3 href="/" className="logo">
                SETU
            </Heading3>
        </Element>
        <Element as="ul" className="navbar-ul" >
            <Element as="li" className="navbar-li">
                <Link  href="/">
                    Home
                </Link>
            </Element>
            <Element as="li" className="navbar-li">
                <Link  href="#features">
                    Features
                </Link>
            </Element>
            <Element as="li" className="navbar-li">
                <Link href="#benefits" >
                Benefits
                </Link>
            </Element>
            <Element as="li" className="navbar-li">
                <Link  href="#footer">
                    Contact
                </Link>
            </Element>
            
            <Button kind="primary" href="/signup" className="last-navbar">
                Get Started
            </Button>
           
        </Element>
            
           
           
    </Element>
</Element>
);
};