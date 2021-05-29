import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const JumbotronComponent = (props) => {
  return (
    <div>
      {/* Ini bagian jumbotron */}
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">Ini adalah halaman latihan crud rest api data siswa</p>
          <hr className="my-2" />
          <p className="lead">
            <Button className="mt-2" color="secondary" size="lg">
              <FontAwesomeIcon icon={faInfo} />
              &nbsp; Info lebih lanjut
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
