import React from 'react';
import Sidebar from '../components/sidebar';

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  console.log('rendering...');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
