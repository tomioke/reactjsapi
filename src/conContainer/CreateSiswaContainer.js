import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class CreateSiswaContainer extends Component {
  render() {
    return (
      <Container>
        <h1>Halaman Create Siswa</h1>
        <BackComponent />
      </Container>
    );
  }
}
