import { ReactNode } from 'react';
import style from './style.module.scss';
interface IProps {
  children: ReactNode;
  handler: () => void;
  backgroundColor?: string;
  color?: string;
  padding?: string;
}
export const Button = ({
  children,
  handler,
  backgroundColor = '#2688eb',
  color = '#ffffff',
  padding = '10px 60px',
}: IProps) => {
  return (
    <button
      className={style['btn']}
      style={{ backgroundColor, color, padding }}
      onClick={handler}>
      {children}
    </button>
  );
};
