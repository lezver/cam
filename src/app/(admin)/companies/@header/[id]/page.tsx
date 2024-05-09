import Header from '@/app/components/header';
import React from 'react';

export interface IPageProps {
  params: { id: string };
}

export default function Page({ params }: IPageProps) {
  return <Header>{`Company (${params.id})`}</Header>;
}
