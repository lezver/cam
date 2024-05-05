import React from 'react';

export interface IServerComponentPorps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: IServerComponentPorps) {
  console.log('Server Component');
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
