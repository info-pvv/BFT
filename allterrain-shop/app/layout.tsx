import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Вездеход «Борей» на мостах Волга — Купить вездеход от 520 000 ₽',
  description: 'Продажа вездеходов Борей на мостах Волга и КПП ВАЗ. 3 комплектации от 520 000 руб. Двигатели Lifan/Loncin. Колеса низкого давления. Доставка по России.',
  keywords: 'вездеход Борей, купить вездеход, вездеход на мостах Волга, вездеход низкого давления, вездеход для охоты, вездеход для рыбалки',
  openGraph: {
    title: 'Вездеход «Борей» — покоритель бездорожья',
    description: 'Надёжный вездеход на мостах Волга. От 520 000 ₽',
    images: ['/images/vehicles/borey-og.jpg'],
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Вездеход «Борей» — покоритель бездорожья',
    description: 'Надёжный вездеход на мостах Волга. От 520 000 ₽',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body
        className="antialiased bg-zinc-950 min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
