'use client';

import Link from 'next/link';
import React from 'react';

export interface IGlobalErrorProps {}

export default function GlobalErrorProps({}: IGlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Sometiong globally went wrong</p>
          <Link
            href="/"
            className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded m-2 block w-fit"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
