import { JetBrains_Mono as JetBrainsMono } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";
//componants
import Header from "@/components/Header";

const jetBrainsMono = JetBrainsMono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
        </body>
    </html>
  );
}
