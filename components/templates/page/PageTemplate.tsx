import { NextPageWithLayout } from '../../../pages/page';
import PrimaryLayout from '../../layouts/primary/PrimaryLayout';

export interface IPageTemplate {
  textProp: string;
}

const PageTemplate: NextPageWithLayout = () => {
  return (
    <div className='text-xl font-semibold bg-black text-white'>
      Page template
    </div>
  );
};

export default PageTemplate;

PageTemplate.getLayout = (page) => {
  return <PrimaryLayout bgColor={'bg-white'}>{page}</PrimaryLayout>;
};
