import { FC, ReactNode } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

const HeaderSection: FC<MyComponentProps> = ({ children }) => (
  <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12'>
    {children}
  </div>
);

export default HeaderSection;
