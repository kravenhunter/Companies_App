import RootStore from '@/store';
import { createContext, type ReactNode } from 'react';
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

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
