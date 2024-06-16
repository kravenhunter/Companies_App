import { Link } from 'react-router-dom';
import style from './style.module.scss';
//Страница ошибки
export const Page404 = () => {
  return (
    <div className={style['not__found']}>
      <h1>Страница ненайдена</h1>
      <Link to={'/'}>На главную</Link>
    </div>
  );
};
