import { ICompanyDTO } from '@/core';
import { useStore } from '@/store/hooks';
import { BasketIcon, Button, Eye } from '@components';
import { memo } from 'react';
import style from './style.module.scss';

interface IProps {
  card: ICompanyDTO;
}
export const Card = memo(({ card }: IProps) => {
  const { modal } = useStore();
  const handler = () => {
    modal.triggerModal(
      `нажата какая-то кнопка, ид компании: ${card.company.companyId} `
    );
  };
  return (
    <article
      className={style['company__card']}
      style={{ backgroundColor: card.mobileAppDashboard.cardBackgroundColor }}>
      <div className={style['company__card__title']}>
        <p style={{ color: card.mobileAppDashboard.highlightTextColor }}>
          {card.mobileAppDashboard.companyName}
        </p>
        <img
          src={card.mobileAppDashboard.logo}
          alt={`${card.mobileAppDashboard.companyName}_logo`}
        />
      </div>
      <hr />
      <p
        className={style['company__card__points']}
        style={{ color: card.mobileAppDashboard.highlightTextColor }}>
        {card.customerMarkParameters.loyaltyLevel.requiredSum}{' '}
        <span style={{ color: card.mobileAppDashboard.textColor }}>баллов</span>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ color: card.mobileAppDashboard.textColor }}>Кешбек</th>
            <th style={{ color: card.mobileAppDashboard.textColor }}>
              Уровень
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {card.customerMarkParameters.loyaltyLevel.markToCash} %</td>
            <td> {card.customerMarkParameters.loyaltyLevel.name}</td>
          </tr>
        </tbody>
      </table>
      <div className={style['company__card__actions']}>
        <span onClick={handler}>
          <Eye size='1.5rem' color={card.mobileAppDashboard.mainColor} />
        </span>
        <span onClick={handler}>
          <BasketIcon
            size='1.5rem'
            color={card.mobileAppDashboard.accentColor}
          />
        </span>
        <Button
          handler={handler}
          backgroundColor={card.mobileAppDashboard.backgroundColor}
          color='#2688eb'
          padding='15px 43px'>
          Подробнее
        </Button>
      </div>
    </article>
  );
});
Card.displayName = 'Card';
