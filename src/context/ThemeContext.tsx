'use client';
import { ThemeProvider } from 'next-themes';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};
