import { FunctionComponent } from 'react';

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;

const Container: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className='max-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20'>
      {children}
    </div>
  );
};

export default Container;
