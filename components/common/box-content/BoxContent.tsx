import { HTMLAttributes, ReactNode } from 'react';

export interface IBoxContent extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  invert?: boolean;
}

const BoxContent: React.FC<IBoxContent> = (props: IBoxContent) => {
  const { className, children, invert, ...rest } = props;
  return <div className={className}>{children}</div>;
};

export default BoxContent;
