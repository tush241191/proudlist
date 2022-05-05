import { useEffect, useState } from 'react';
import PrimaryButton from '../components/buttons/primary/PrimaryButton';
import ImageTemplate from '../components/image/ImageTemplate';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Features, { IFeatures } from '../components/utility/features/Features';
import database from '../lib/landing/database.json';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const handleSignInClick = (event: any) => {
    event.preventDefault();
  };

  const [features, setFeatures] = useState<IFeatures[]>([]);

  useEffect(() => {
    if (features.length == 0) {
      database.map((item) => {
        const obj: IFeatures = {
          id: item.id,
          title: item.title,
          quote: item.quote,
          content: item.content,
          button: item.button,
          image: item.image,
          position: item.position,
          bgColor: item.bgColor,
        };

        setFeatures((prevState) => [...prevState, obj]);
      });
    }
  });

  return (
    <section>
      <div className='relative bg-black'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 '></div>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='pt-28 lg:pt-72 2xl:pt-80 relative shadow-xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <ImageTemplate src='/assets/main-new.png' />
            </div>
            <div className=' absolute flex justify-end p-2 md:p-4 top-0 w-full'>
              <PrimaryButton
                label='Sign up'
                size='sm'
                onClick={handleSignInClick}
              />
            </div>
            <div className='pb-8 relative px-4 sm:px-6 lg:px-8'>
              <ImageTemplate
                src='/assets/logo-white.svg'
                className='h-14 w-auto mx-auto sm:h-32'
                isNextjsImage={false}
              />
              <h2 className='mt-4 lg:mt-10 text-center text-white font-bold text-lg lg:text-2xl'>
                <span className='text-blue-500'>P</span>ROUD
                <span className='text-blue-500'>L</span>IST
              </h2>
              <h1 className='mt-14 lg:mt-28 text-center text-3xl font-bold tracking-wide sm:text-6xl'>
                <span className='block text-white'>
                  LIVE A LIFE THAT YOU ARE PROUD OF
                </span>
              </h1>
              <p className='hidden lg:block mt-4 lg:mt-10 max-w-lg mx-auto text-center text-lg lg:text-3xl text-white sm:max-w-2xl'>
                Understand Your purpose, goals and actions while being proud of
                Yourself
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-center px-4 sm:px-6 lg:py-10 lg:px-8'>
        <p className='lg:hidden max-w-lg mx-auto text-center text-lg lg:text-3xl text-white sm:max-w-2xl'>
          Understand Your purpose, goals and actions while being proud of
          Yourself
        </p>
        <div className='py-8 lg:py-10 flex justify-center'>
          <div className='inline-flex rounded-md shadow'>
            <PrimaryButton
              label='It is Free to try (no credit card needed)'
              size='lg'
              state='primary'
            />
          </div>
        </div>
      </div>
      <div className='bg-black shadow-xl'>
        {/* Alternating Feature Sections */}
        <div className='max-w-screen-2xl mx-auto relative grid overflow-hidden'>
          {features.length > 0 && (
            <>
              {features.map((item) => (
                <Features key={item.id} {...item} />
              ))}
            </>
          )}
          {/* {database.map((feature) => (
            <Features {...featureData} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout bgColor={'bg-black'}>{page}</PrimaryLayout>;
};
