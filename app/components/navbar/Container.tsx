import { FunctionComponent } from 'react';
import clsx from 'clsx';

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;

const Container: FunctionComponent<Props> = ({ children }) => {
  const classes = clsx(
    'max-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20'
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
