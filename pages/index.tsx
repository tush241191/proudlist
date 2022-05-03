import Image from 'next/image';
import PrimaryButton from '../components/buttons/primary/PrimaryButton';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className="relative bg-black">
        <div className="absolute inset-x-0 bottom-0 h-1/2 "></div>
        <div className="max-w-screen-2xl mx-auto">
          <div className="pt-28 lg:pt-72 2xl:pt-80 relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/assets/main-new.png"
                alt="Proudlist"
                className="h-full w-full object-cover"
                layout="fill"
              />
            </div>
            <div className="hidden absolute flex justify-end p-2 md:p-4 top-0 w-full">
              <button className="bg-transparent hover:bg-gray-800 px-4 py-2 rounded-md text-sm md:text-base text-gray-300">
                Sign up
              </button>
              <button className="hidden bg-transparent hover:bg-gray-800 px-4 py-2 rounded-md text-sm md:text-base text-gray-300">
                Sign in
              </button>
            </div>
            <div className="pb-8 relative px-4 sm:px-6 lg:px-8">
              <img
                src="/assets/logo-white.svg"
                alt="Proudlist"
                className="h-14 w-auto mx-auto sm:h-32"
              />
              <h2 className="mt-4 lg:mt-10 text-center text-white font-bold text-lg lg:text-2xl">
                <span className="text-blue-500">P</span>ROUD
                <span className="text-blue-500">L</span>IST
              </h2>
              <h1 className="mt-14 lg:mt-28 text-center text-3xl font-bold tracking-wide sm:text-6xl">
                <span className="block text-white">
                  LIVE A LIFE THAT YOU ARE PROUD OF
                </span>
              </h1>
              <p className="hidden lg:block mt-4 lg:mt-10 max-w-lg mx-auto text-center text-lg lg:text-3xl text-white sm:max-w-2xl">
                Understand Your purpose, goals and actions while being proud of
                Yourself
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center px-4 sm:px-6 lg:py-10 lg:px-8">
        <p className="lg:hidden max-w-lg mx-auto text-center text-lg lg:text-3xl text-white sm:max-w-2xl">
          Understand Your purpose, goals and actions while being proud of
          Yourself
        </p>
        <div className="py-8 lg:py-10 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <PrimaryButton
              sampleTextProp="It is Free to try (no credit card needed)"
              style="px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout bgColor={'bg-black'}>{page}</PrimaryLayout>;
};
