'use client';

import { getPromotions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Promotion from './promotion';

export interface ICompanyPromotionsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companyId,
}: ICompanyPromotionsProps) {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map(promotion => (
        <div key={promotion.id}>
          <Promotion promotion={promotion} />
        </div>
      ))}
    </div>
  );
}
