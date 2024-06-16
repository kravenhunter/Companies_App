import cn from 'classnames';
import React from 'react';
import style from './style.module.scss';
interface IProps {
  children: React.ReactNode;
  isBgWhite?: boolean;
}
export const ModalWrapper = ({ isBgWhite = true, children }: IProps) => {
  return (
    <div
      className={cn(
        style['modal'],
        isBgWhite ? style['modal__bg__white'] : style['modal__bg__blure']
      )}>
      {children}
    </div>
  );
};
