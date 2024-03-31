import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Acelera Ong",
  description: "Transformando compromisso em ação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ptbr">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
