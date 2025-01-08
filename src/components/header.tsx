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
    <header className="header">
        <Div className="header-div">
            <Div>
                <Heading3 href="/" className="logo">
                    SETU
                </Heading3>
            </Div>
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <Link href="/">Home</Link>
                </li>
                <li className="navbar-li">
                    <Link href="#features">Features</Link>
                </li>
                <li className="navbar-li">
                    <Link href="#benefits">Benefits</Link>
                </li>
                <li className="navbar-li">
                    <Link href="#footer">Contact</Link>
                </li>
                <Button kind="primary" href="/signup" className="last-navbar">
                    Get Started
                </Button>
            </ul>
        </Div>
    </header>
);
};