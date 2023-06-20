'use client';

import Container from '@/app/components/navbar/Container';
import { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const NavBar: FunctionComponent<Props> = (props) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>Anything</Container>
      </div>
    </div>
  );
};

export default NavBar;
