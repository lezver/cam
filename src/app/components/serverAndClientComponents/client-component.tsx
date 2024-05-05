'use client';

import React from 'react';

export interface IClientComponentPorps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: IClientComponentPorps) {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
