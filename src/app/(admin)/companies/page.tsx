import React from 'react';

import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';

export interface IPageProps {}

export default function Page({}: IPageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country={'USA'}
        joinedDate={'05.04.2024'}
      />
    </CompanyTable>
  );
}
