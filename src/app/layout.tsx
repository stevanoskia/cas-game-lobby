import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GameFilterProvider } from "@/context/FilterContext";
import { GameActionsProvider } from "@/context/FavouritesContext";
import { Providers as ThemeProvider } from "@/context/ThemeContext"; // this is your next-themes wrapper

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}>
        <ThemeProvider>
          <GameFilterProvider>
            <GameActionsProvider>
              <Navigation />
              <main className="flex-grow pt-20">{children}</main>
              <Footer />
            </GameActionsProvider>
          </GameFilterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
