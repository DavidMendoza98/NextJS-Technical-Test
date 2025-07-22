import type { Metadata } from "next";
import { ThemeProvider } from "../context/theme";
import { AuthProvider } from "@/context/auth";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conoce Honduras",
  description: "Prueba Técnica React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <Header />
            {children}
            <Toaster
              position="top-right"
              expand
              visibleToasts={3}
              closeButton
              theme="light"
              richColors
              duration={1000}
            />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
