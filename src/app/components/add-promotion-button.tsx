'use client';

import { useRouter } from 'next/router';
import React from 'react';
import Button from './button';

export interface IAddPromotionButtonProps {
  companyId: string;
}

export default function AddPromotionButton({
  companyId,
}: IAddPromotionButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add Promotion
    </Button>
  );
}
