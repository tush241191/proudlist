export interface IDefaultButton {
  textProp: string;
  styleProp?: string;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  textProp,
  styleProp = 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
}) => {
  return (
    <div
      className={`${styleProp} inline-flex items-center px-2.5 py-1.5 border text-xs font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer`}
    >
      {textProp}
    </div>
  );
};

export default DefaultButton;
