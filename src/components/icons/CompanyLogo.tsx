import Logo from '@assets/images/logo.png';
import style from './style.module.scss';

interface IProps {
  size?: string;
}
export const CompanyLogo = ({ size = '100%' }: IProps) => {
  return (
    <div className={style['logo']}>
      <img src={Logo} alt={`company_logo`} width={size} />
    </div>
  );
};
