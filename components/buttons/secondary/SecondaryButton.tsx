export interface ISecondaryButton {
  textProp: string;
  styleProp?: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({
  textProp,
  styleProp,
}) => {
  return (
    <div
      className={`${styleProp} inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer`}
    >
      {textProp}
    </div>
  );
};

export default SecondaryButton;
