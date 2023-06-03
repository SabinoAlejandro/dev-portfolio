import { FC, ReactNode } from 'react';
import HeaderSection from './HeaderSection';

interface MyComponentProps {
  headerName?: string;
  children: ReactNode;
}

const Section: FC<MyComponentProps> = ({ headerName, children }) => (
  <section className='mb-16'>
    {headerName && <HeaderSection name={headerName} />}
    <div className=''>{children}</div>
  </section>
);

export default Section;
