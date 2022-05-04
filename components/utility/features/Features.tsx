import PrimaryButton from '../../buttons/primary/PrimaryButton';
import ImageTemplate from '../../image/ImageTemplate';

interface ICommonObject {
  data: Array<string>;
  author: string;
}

export interface IFeatures {
  id: number;
  title: string;
  content: ICommonObject;
  quote: ICommonObject;
  button: string;
  image: string;
  position: string;
  bgColor: string;
}

const Features = (props: IFeatures) => {
  const { id, title, content, quote, button, image, position, bgColor } = props;

  function getBgColor(bgColor: string) {
    switch (bgColor) {
      case 'green':
        return 'bg-green-50';
      case 'yellow':
        return 'bg-yellow-50';
      case 'pink':
        return 'bg-pink-50';
      case 'purple':
        return 'bg-purple-50';
      default:
        break;
    }
  }

  return (
    <>
      <div className={`${getBgColor(bgColor)} pb-20`}>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div
            className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-lg lg:mx-auto lg:px-0 ${
              position == 'right' ? 'lg:col-start-2' : ''
            }`}
          >
            <div>
              <div className='mt-6 text-center'>
                <h2 className='text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 mb-4'>
                  {title}
                </h2>
                <>
                  {content.data.map((item) => (
                    <p
                      key={item}
                      className='text-base lg:text-lg text-gray-500'
                    >
                      {item}
                    </p>
                  ))}

                  {content.author != '' && (
                    <div className='text-base lg:text-lg font-medium text-gray-700'>
                      {content.author}
                    </div>
                  )}
                </>
                <div className='mt-6'>
                  <PrimaryButton label={button} state='primary' size='lg' />
                </div>
              </div>
            </div>
            {quote.data.length > 0 && (
              <div className='mt-8 border-t border-gray-200 pt-6 text-center'>
                <blockquote>
                  <div>
                    <>
                      {quote.data.map((item) => (
                        <p
                          key={item}
                          className='text-base lg:text-lg text-gray-500'
                        >
                          {item}
                        </p>
                      ))}
                    </>
                  </div>
                  {quote.author != '' && (
                    <div className='mt-3'>
                      <div className='flex items-center justify-center space-x-3'>
                        <div className='text-sm lg:text-base font-medium text-gray-700'>
                          {quote.author}
                        </div>
                      </div>
                    </div>
                  )}
                </blockquote>
              </div>
            )}
          </div>
          <div
            className={`mt-8 lg:mt-0 ${
              position == 'right' ? 'lg:col-start-1' : ''
            }`}
          >
            <div className='flex items-center px-4 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <ImageTemplate
                isNextjsImage={false}
                src={image}
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-96 lg:w-auto lg:max-w-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
