import { JetBrains_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";

const JetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] , 
  Weight:["100","200","300","400","500","600","700","800"],
  Variable: '--font-jetbrainsMono'
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrains_Mono.Variable}>{children}</body>
    </html>
  );
}
