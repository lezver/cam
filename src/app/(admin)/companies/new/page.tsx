'use client';

import Button from '@/app/components/button';
import CompanyForm from '@/app/components/company-form';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface IPageProps {}

export default function Page({}: IPageProps) {
  const router = useRouter();

  return (
    <div className="py-6 px-10">
      <Button onClick={() => router.push('/companies')}>Go Back</Button>
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
