import React from 'react';
import { getSummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import Link from 'next/link';

export interface IPageProps {}

type dataType = {
  totalPromotions: number;
  totalCategories: number;
  newCompanies: number;
  totalActiveCompanies: number;
};

const labelByStat = {
  totalPromotions: 'Total promotions',
  totalCategories: 'Total categories',
  newCompanies: 'New companies',
  totalActiveCompanies: 'Total active companies',
};

export default async function Page({}: IPageProps) {
  const data: dataType = await new Promise(res =>
    setTimeout(() => res(getSummaryStats()), 2222)
  );

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map(key => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </Link>
      ))}
    </div>
  );
}
