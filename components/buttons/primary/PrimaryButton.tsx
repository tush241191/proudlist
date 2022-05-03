export interface IPrimaryButton {
  textProp: string;
  styleProp?: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ textProp, styleProp }) => {
  return (
    <div
      className={`${styleProp} inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer`}
    >
      {textProp}
    </div>
  );
};

export default PrimaryButton;
