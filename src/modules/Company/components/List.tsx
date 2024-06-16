import { ICompanyDTO } from '@/core';
import { useStore } from '@/store/hooks';
import { Loader } from '@components';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from './Card';
import style from './style.module.scss';
interface IProps {
  cards?: ICompanyDTO[];
}
export const CompanyList = observer(({ cards }: IProps) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const root = useStore();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    let timoutId: NodeJS.Timeout | null = null;
    if (inView && !root.companies.error) {
      setIsloading(true);
      timoutId = setTimeout(() => {
        void root.fetchCompanies();
        !root.companies.loading && setIsloading(false);
      }, 1500);
    } else if (!inView) {
      root.companies.resetError();
    }
    return () => {
      timoutId && clearTimeout(timoutId);
    };
  }, [inView]);

  useEffect(() => {
    let timoutId: NodeJS.Timeout | null = null;
    if (cards) {
      timoutId = setTimeout(() => {
        setFirstLoad(false);
      }, 1500);
    }

    return () => {
      timoutId && clearTimeout(timoutId);
    };
  }, [cards]);
  return firstLoad ? (
    <Loader />
  ) : (
    <div className={style['company__card__list']}>
      {cards &&
        cards.map((el) => <Card key={el.company.companyId} card={el} />)}

      <div ref={ref} className='loader__activate'>
        {isLoading && (
          <>
            {!root.companies.error ? (
              <Loader />
            ) : (
              <p className={style['company__card__list__empty']}>
                Нет компаний
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
});
