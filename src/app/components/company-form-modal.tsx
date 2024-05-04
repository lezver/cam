'use client';

import React from 'react';
import Modal, { IModalProps } from './modal';
import CompanyForm, { ICompanyFomrProps } from './company-form';

export interface ICompanyFromModalProps extends IModalProps {
  onSubmit: ICompanyFomrProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: ICompanyFromModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
