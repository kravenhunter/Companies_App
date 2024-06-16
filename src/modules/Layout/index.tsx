import { RoutesNavigation } from '@/routes';
import { CompanyLogo, ModalWrapper } from '@components';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import Header from './header';
import style from './style.module.scss';

// LayOut Component
export const DefaultLayout = observer(() => {
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    const timoutId = setTimeout(() => {
      setShowPreview(false);
    }, 3000);
    return () => clearTimeout(timoutId);
  }, []);

  return showPreview ? (
    <ModalWrapper>
      <CompanyLogo size='220px' />
    </ModalWrapper>
  ) : (
    <>
      <Header />
      <main className={style['layout']}>
        <RoutesNavigation />
      </main>
    </>
  );
});
