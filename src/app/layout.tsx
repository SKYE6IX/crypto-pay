import './styles/global.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unknow App',
  description: 'No idea what app will be build with this app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
