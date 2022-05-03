import Image from 'next/image';

export interface IImageTemplate {
  src: string;
  alt?: string;
  className?: string;
  isNextjsImage?: boolean;
}

const ImageTemplate: React.FC<IImageTemplate> = ({
  src,
  alt = 'Proudlist',
  className = 'h-full w-full object-cover',
  isNextjsImage = true,
}) => {
  return (
    <>
      {isNextjsImage ? (
        <Image
          src={src}
          alt={alt}
          className={className}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </>
  );
};

export default ImageTemplate;
