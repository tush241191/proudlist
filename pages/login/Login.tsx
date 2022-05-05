import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

export interface ILogin {
  email: string;
}

const Login: NextPageWithLayout = () => {
  return (
    <div className='text-xl font-semibold bg-black text-white'>Login page</div>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <PrimaryLayout bgColor={'bg-white'}>{page}</PrimaryLayout>;
};
