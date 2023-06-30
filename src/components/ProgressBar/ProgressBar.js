import { Row } from "react-bootstrap";
import ProgressStep from "../ProgressStep/ProgressStep";
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <Row className="justify-content-center mt-3">
      <ul className={`${styles.progressBar}`}>
        <ProgressStep stepName={'Tax Type'} />
        <ProgressStep stepName={'Details'} active />
        <ProgressStep stepName={'Payment Option'} />
        <ProgressStep stepName={'Review'} />
        <ProgressStep stepName={'Make Payment'} />
        <ProgressStep stepName={'Confirmation'} />
      </ul>
    </Row>
  );
}

export default ProgressBar;