import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class PrintSiswaContainer extends Component {
  render() {
    return (
      <Container>
        <h1>Halaman print Siswa</h1>
        <BackComponent />
      </Container>
    );
  }
}
