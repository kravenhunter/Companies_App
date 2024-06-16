import { useStore } from '@/store/hooks';
import { Message, ModalWrapper } from '@components';
import { CompanyList } from '@modules';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
// LayOut Component
export const HomePage = observer(() => {
  const { companies, modal } = useStore();

  const closeHandler = () => modal.triggerModal();
  // useEffect(() => {
  //   console.log(companies.list);
  // }, [companies.list, companies.list.length]);
  // useEffect(() => {
  //   console.log(modal.isEnable);
  //   console.log(modal.text);
  // }, [modal.isEnable, modal.text]);

  useEffect(() => {
    let timoutId: NodeJS.Timeout | null = null;

    if (companies.error?.length) {
      timoutId = setTimeout(() => {
        companies.error && modal.triggerModal(companies.error);
      }, 1500);
    }
    return () => {
      timoutId && clearTimeout(timoutId);
    };
  }, [companies.error, modal]);
  return (
    <>
      {modal.isEnable && (
        <ModalWrapper isBgWhite={false}>
          <Message
            text={modal.text}
            handler={closeHandler}
            type={companies.error?.length ? 'error' : 'text'}
          />
        </ModalWrapper>
      )}
      <CompanyList cards={companies.list} />
    </>
  );
});
