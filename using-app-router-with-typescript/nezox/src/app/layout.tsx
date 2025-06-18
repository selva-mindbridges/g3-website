import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/meanmenu.min.css";
import "../app/styles/flaticon.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global style
import "../app/styles/style.css";
import "../app/styles/responsive.css";

import type { Metadata } from "next";
import { Lato } from "next/font/google"; 
import GoTop from "@/components/Layouts/GoTop";

const lato = Lato({ 
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Nezox - Cyber Security Company React Nextjs Template",
  description: "Cyber Security Company React Nextjs Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}

        <GoTop />
      </body>
    </html>
  );
}
