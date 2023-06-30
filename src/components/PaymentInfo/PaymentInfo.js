import { Card, ListGroup } from "react-bootstrap";
import styles from './PaymentInfo.module.css';
import { BiSolidLockAlt } from 'react-icons/bi';


const PaymentInfo = () => {
  return (
    <>
      <Card >
        <ListGroup variant="flush">
          <ListGroup.Item className="text-center py-3 px-4">
            <h2 className={`${styles.paymentInfoTitle}`}>Payment Recipient</h2>
            <h3 className={`${styles.paymentInfoSubTitle}`}>Canada Revenue Agency</h3>
            <small><a href="https://www.canada.ca">https://www.canada.ca</a></small>
          </ListGroup.Item>
          <ListGroup.Item className="text-center py-3 px-4">
            <h2 className={`${styles.paymentInfoTitle}`}>Individual Taxes</h2>
            <h3 className={`${styles.paymentInfoSubTitle}`}>Individual(T1)</h3>
            <h3 className={`${styles.paymentInfoSubTitle}`}>Individual (T1) Tax amount owing</h3>
          </ListGroup.Item>
          <ListGroup.Item className="text-center py-3 px-4">
            <h3 className={`${styles.paymentInfoSubTitle} text-success`}><BiSolidLockAlt /> This is a secure site</h3>
          </ListGroup.Item>
        </ListGroup>
      </Card>

    </>

  );
}

export default PaymentInfo;