import { Mohave } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const mohave = Mohave({ subsets: ["latin"] });

export const metadata = {
  title: "Son's Portfolio",
  description: "Tran Son Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mohave.className}>{children}</body>
    </html>
  );
}
