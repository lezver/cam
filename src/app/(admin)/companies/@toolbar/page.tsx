import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';
import React from 'react';

export interface IPageProps {}

export default function Page({}: IPageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
