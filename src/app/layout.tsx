import '../globalStyles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Crypto Pay',
  description: 'Crypto payment for telegram bot',
};

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning={true}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
