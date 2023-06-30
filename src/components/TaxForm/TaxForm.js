import { Form, Container, Row, Col, InputGroup, Card } from "react-bootstrap";
import styles from './TaxForm.module.css';
import { useState } from "react";

const TaxForm = () => {
  const [error, setError] = useState({
    email: false,
    sinNumber: false,
    taxpayer: false,
    paymentAmount: false,
  })

  const handleValidation = (e) => {
    let id = e.target.id;
    if (e.target.value === '' || e.target.value === null) {
      setError({
        ...error,
        [id]: true
      });
    } else {
      setError({
        ...error,
        [id]: false
      });
    }
  }
  return (
    <Card className="p-4">
      <h1 className={`${styles.formText} text-center`}>
        Taxpayer Details
        <span className={`${styles.formSubText}`}>All fields are mandatory.</span>
      </h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control type="email" placeholder="Email Address" onBlur={handleValidation} className={`${error.email && 'border-danger'}`} />
                {error.email && <div className={`${styles.error}`}>Required</div>}
              </Form.Group>
              <Form.Group className="mb-4" controlId="sinNumber">
                <Form.Label>Social Insurance Number</Form.Label>
                <Form.Text className="text-muted">
                  999 999 999
                </Form.Text>
                <Form.Control type="number" min="900000000" max="999999999" placeholder="999 999 999" onBlur={handleValidation} className={`${error.sinNumber && 'border-danger'}`} />
                {error.sinNumber && <div className={`${styles.error}`}>Required</div>}
              </Form.Group>
              <Form.Group className="mb-4" controlId="taxpayer">
                <Form.Label>Taxpayer Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" onBlur={handleValidation} className={`${error.taxpayer && 'border-danger'}`} />
                {error.taxpayer && <div className={`${styles.error}`}>Required</div>}
              </Form.Group>
              <Form.Group className="mb-4" controlId="paymentAmount">
                <Form.Label>Payment Amount</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control aria-label="Payment Amount" type="text" placeholder="Payment Amount" onBlur={handleValidation} className={`${error.paymentAmount && 'border-danger'}`} />
                </InputGroup>
                {error.paymentAmount && <div className={`${styles.error}`}>Required</div>}
              </Form.Group>
            </Form>
            <div className={`${styles.formText} text-center`}>
              <span className={`${styles.formSubText} `}>Your information will be encrypted and not be shared with anyone except the Canada Revenue Agency.</span>
              <span className={`${styles.formSubText} `}>By clicking the Continue Button, you agree to <a href="/">Payment Source's Terms.</a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default TaxForm;
