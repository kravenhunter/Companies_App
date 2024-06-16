import { StoreProvider } from '@/store/storeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './modules';
import './styles';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <DefaultLayout />
    </StoreProvider>
  </BrowserRouter>
);
