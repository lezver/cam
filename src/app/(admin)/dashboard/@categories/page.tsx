import React from 'react';
import { getSummaryCategories } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export interface IPageProps {}

type dataType = {
  categoryId: number;
  categoryTitle: string;
  count: number;
};

export default async function Page({}: IPageProps) {
  const data: dataType[] = await new Promise(res =>
    setTimeout(() => res(getSummaryCategories()), 5555)
  );

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
