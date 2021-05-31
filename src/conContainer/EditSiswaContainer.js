import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class EditSiswaContainer extends Component {
  render() {
    return (
      <Container>
        <h1>Halaman Edit Siswa</h1>
        <BackComponent />
      </Container>
    );
  }
}
