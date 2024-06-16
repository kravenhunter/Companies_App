import RootStore from '@/store';
import React, { createContext } from 'react';
//Init data store
const store = RootStore.create({
  companies: {
    countComamies: 0,
    hasEmpryCompany: true,
    limit: 10,
    loading: false,
    error: null,
    currentOffset: 0,
    list: [],
  },
  modal: {
    text: '',
    isEnable: false,
  },
});

export const StoreContext = createContext(store);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
