// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { ThemeProvider } from "fictoan-react";

// COMPONENTS ==================================================================
import { Header } from "@/components/header";

// STYLES ======================================================================
import "@/styles/globals.css";

// ASSETS ======================================================================

// TYPES =======================================================================
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Health AI",
  description: "NextJS boilerplate for React using Fictoan Framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
      <Header />
        <ThemeProvider currentTheme="theme-dark">
         

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
