import LoginCard from '../../components/cards/login/LoginCard';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

export interface ILogin {
  email: string;
}

const Login: NextPageWithLayout = () => {
  return <LoginCard />;
};

export default Login;

Login.getLayout = (page) => {
  return <PrimaryLayout bgColor={'bg-white'}>{page}</PrimaryLayout>;
};
