import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class DeleteSiswaContainer extends Component {
  render() {
    return (
      <Container>
        <h1>Halaman Delete Siswa</h1>
        <BackComponent />
      </Container>
    );
  }
}
