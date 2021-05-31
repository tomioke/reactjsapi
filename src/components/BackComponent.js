import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={'/'}>
          <Button color="secondary">
            <FontAwesomeIcon icon={faBackspace} />
            &nbsp;Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
