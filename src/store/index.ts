import { ApiCompanyServices, ICompantResponse, ICompanyDTO } from '@/core';
import { CompanyStore } from '@modules';
import { AxiosError } from 'axios';
import { flow, types } from 'mobx-state-tree';
import { IBody } from './types';

const ModalStore = types
  .model('ModalStore', {
    text: types.string,
    isEnable: types.boolean,
  })
  .actions((self) => ({
    triggerModal(text?: string) {
      if (text?.length) {
        self.text = text;
        self.isEnable = true;
      } else {
        self.isEnable = false;
        self.text = '';
      }
    },
  }));

const RootStore = types
  .model('RootStore', {
    companies: CompanyStore,
    modal: ModalStore,
  })
  .actions((self) => ({
    fetchCompanies: flow(function* () {
      self.companies.loading = true;
      self.companies.error = null;
      try {
        //  '/getAllCompaniesError',
        const getData: ICompantResponse<ICompanyDTO[]> =
          yield ApiCompanyServices.post<ICompantResponse<ICompanyDTO[]>, IBody>(
            '/getAllCompanies',
            {
              limit: self.companies.limit,
              offset: self.companies.currentOffset ?? 0,
            }
          );
        if (getData.companies.length) {
          self.companies.list.push(
            ...(getData.companies as typeof self.companies.list)
          );

          self.companies.currentOffset = getData.offset + 1;
          self.companies.countComamies += self.companies.list.length;
          self.companies.error = null;
        }
      } catch (error) {
        console.log(error);

        const getError = error as AxiosError;
        getError.response?.status === 500 &&
          (self.companies.error = 'Всё упало');
        getError.response?.status === 401 &&
          (self.companies.error = getError.message);
        getError.response?.status === 400 &&
          (self.companies.error = 'Ощибка авторизации');
      } finally {
        self.companies.loading = false;
      }
    }),
  }))
  .actions((self) => ({
    afterCreate() {
      void self.fetchCompanies();
    },
  }));

export type RootStoreType = typeof RootStore;
export default RootStore;
