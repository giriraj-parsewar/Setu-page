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
  title: "Setu",
  description: "MY IMPLEMETATION OF SETU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const listOfThemes = ["theme-light", "theme-dark"];

  return (
    <html lang="en">
      <body>
      <ThemeProvider currentTheme="theme-dark">
  <Header />
  {children}
</ThemeProvider>
      </body>
    </html>
  );
}