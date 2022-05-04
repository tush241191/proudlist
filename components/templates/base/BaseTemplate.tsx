export interface IBaseTemplate {
  textProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ textProp }) => {
  return (
    <div className="text-xl font-semibold bg-black text-white">{textProp}</div>
  );
};

export default BaseTemplate;
