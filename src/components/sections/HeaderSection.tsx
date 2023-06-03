import { FC, ReactNode } from 'react';

interface MyComponentProps {
  name: string;
}

const HeaderSection: FC<MyComponentProps> = ({ name }) => (
  <div className='sticky top-0 z-20  bg-light-blue-600/75 backdrop-blur mb-4 py-5 px-6 -mx-6 md:-mx-12 md:px-12'>
    <h2 className='uppercase'>{name}</h2>
  </div>
);

export default HeaderSection;
