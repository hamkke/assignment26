import type { Metadata } from 'next';
import { Gowun_Batang } from 'next/font/google';
import './globals.css';

const gowunBatang = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '안녕하세요',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body
        className={`${gowunBatang.className} bg-black text-black max-w-screen-sm m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
