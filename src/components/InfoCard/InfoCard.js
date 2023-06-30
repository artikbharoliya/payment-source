import { Card, ListGroup } from "react-bootstrap";
import styles from './InfoCard.module.css';
import { FaUserShield } from 'react-icons/fa';

const InfoCard = () => {
  return (
    <Card className="my-3">
      <ListGroup.Item className="text-center py-3 px-4">
        <h3 className={`${styles.InfoCardSubTitle}`}><FaUserShield /> Protect yourself against fraud.</h3>
        <small><a href="/">Visit the CRA site for more information.</a></small>
      </ListGroup.Item>
    </Card>
  );
}

export default InfoCard;