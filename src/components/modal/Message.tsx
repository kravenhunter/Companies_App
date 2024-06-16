import { Button, Warning } from '@components';
import style from './style.module.scss';
type TypeMessage = 'text' | 'error';
interface IProps {
  text: string;
  type?: TypeMessage;
  handler: () => void;
}
export const Message = ({ text, handler, type = 'text' }: IProps) => {
  return (
    <div className={style['message']}>
      {type === 'error' && <Warning />}
      <p>{text}</p>
      <Button handler={handler}>Хорошо</Button>
    </div>
  );
};
