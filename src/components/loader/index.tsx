import Spinner from '@assets/images/spinner-icon.svg';
import style from './style.module.scss';
export const Loader = () => {
  return (
    <div className={style['loader']}>
      <img src={Spinner} alt='spinner' />
      <p>Подгрузка компаний</p>
    </div>
  );
};
