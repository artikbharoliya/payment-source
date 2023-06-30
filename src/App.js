import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ProgressBar from './components/ProgressBar';
import TaxForm from './components/TaxForm';
import PaymentInfo from './components/PaymentInfo';
import ButtonGroup from './components/ButtonGroup';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col className="d-none d-lg-block">
            <ProgressBar />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={12} md={8}>
            <TaxForm />
            <ButtonGroup />
          </Col>
          <Col xs={12} md={4} >
            <div className="d-none d-lg-block">
              <PaymentInfo />
            </div>
            <InfoCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
