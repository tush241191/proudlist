import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  textProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ textProp }) => {
  return <div className={styles.container}>{textProp}</div>;
};

export default BaseTemplate;
