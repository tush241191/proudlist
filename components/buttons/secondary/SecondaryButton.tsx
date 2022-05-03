export interface ISecondaryButton {
  sampleTextProp: string;
  style?: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({
  sampleTextProp,
  style,
}) => {
  return (
    <div
      className={`${style} inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer`}
    >
      {sampleTextProp}
    </div>
  );
};

export default SecondaryButton;
