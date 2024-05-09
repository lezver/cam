'use client';

import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface IPageProps {
  params: { id: string };
}

export default function Page({ params }: IPageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    Number.isNaN(id) && notFound();
  }, [params.id]);

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}
