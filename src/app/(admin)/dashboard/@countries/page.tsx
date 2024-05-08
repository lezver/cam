import React from 'react';
import Image from 'next/image';
import { getSummaryCountries } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import clsx from 'clsx';

export interface IPageRrops {}

type dataType = {
  countryId: number;
  countryTitle: string;
  count: number;
};

export default async function Page({}: IPageRrops) {
  const data: dataType[] = await new Promise(res =>
    setTimeout(() => res(getSummaryCountries()), 1111)
  );

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {data.map(({ countryId, countryTitle, count }) => (
            <p
              key={countryId}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
              )}
            >{`${countryTitle} - ${count}`}</p>
          ))}
        </div>
        <Image
          priority={true}
          width={395}
          height={262}
          src="/images/world.svg"
          alt="world"
        />
      </div>
    </DashboardCard>
  );
}
