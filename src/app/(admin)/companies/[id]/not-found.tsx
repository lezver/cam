import Link from 'next/link';
import React from 'react';

export interface INotFoundProps {}

export default function NotFound({}: INotFoundProps) {
  return (
    <div>
      <p>Could not found Company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}
