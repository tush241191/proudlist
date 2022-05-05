import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../footer/Footer';

export interface IPrimaryLayout {
  children?: ReactNode;
  bgColor?: String;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  bgColor = 'bg-white',
}) => {
  return (
    <>
      <Head>
        <title>Proudlist</title>
      </Head>
      <div className={`${bgColor}`}>
        <div className='relative overflow-hidden min-h-screen max-w-screen-2xl mx-auto flex flex-col'>
          {children}
          <div className='m-auto' />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;
