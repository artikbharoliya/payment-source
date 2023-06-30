import styles from './ProgressStep.module.css';
const ProgressStep = ({ stepName, active = false }) => {
  return (
    <li className={`${active ? styles.progressStep + " " + styles.progressStepActive : styles.progressStep}`}>
      {stepName}
    </li>
  );
}

export default ProgressStep;
