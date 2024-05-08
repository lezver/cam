import React from 'react';

export interface ILoadingProps {}

export default function Loading({}: ILoadingProps) {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
