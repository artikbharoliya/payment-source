import { Col, Row } from 'react-bootstrap';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
  return (
    <Row className='mt-4'>
      <Col xs={6} md={6}>
        <button className={`${styles.customButton} py-2`}>Back</button>
      </Col>
      <Col xs={6} md={6}>
        <button className={`${styles.customButton} py-2`}>Continue</button>
      </Col>
    </Row>
  );
}

export default ButtonGroup;
