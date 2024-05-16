import React from 'react';

import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Provider from './components/provider';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
