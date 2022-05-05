import Link from 'next/link';
import { HTMLAttributes } from 'react';
import PrimaryButton from '../../buttons/primary/PrimaryButton';
import Input from '../../form-elements/BorderedInput/Input';
import ImageTemplate from '../../image/ImageTemplate';

export interface ILoginCard extends HTMLAttributes<HTMLDivElement> {
  textProp?: string;
}

const LoginCard: React.FC<ILoginCard> = ({ textProp }) => {
  return (
    <div className='min-h-full h-screen flex items-center bg-gray-900 lg:bg-white py-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <div>
          <Link href={'/'}>
            <a>
              <ImageTemplate
                src='/assets/logo.svg'
                className='hidden md:block mx-auto h-32 w-auto'
                isNextjsImage={false}
              />
              <ImageTemplate
                src='/assets/logo-white.svg'
                className='md:hidden mx-auto h-32 w-auto'
                isNextjsImage={false}
              />
            </a>
          </Link>
          <h2 className='text-2xl font-semibold tracking-widest text-white lg:text-gray-900 uppercase mt-8 lg:mt-0'>
            PROUDLIST
          </h2>
          <p className='text-center text-xs font-semibold uppercase text-gray-300 lg:text-gray-500 tracking-wide mt-4 lg:mt-2'></p>
          <h2 className='mt-20 text-center text-3xl font-extrabold text-gray-100 lg:text-gray-900'>
            Login to your account
          </h2>
          <p className='mt-2 text-sm max-w-xs mx-auto text-gray-100 lg:text-gray-900'>
            Enter your email address and we will send you Login link to your
            inbox.
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='mt-4 rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <Input name='email' id='name' placeholder='user@example.com' />
            </div>
          </div>
          <div>
            <PrimaryButton
              size='md'
              label='Submit'
              state='primary'
              icon='lock'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
