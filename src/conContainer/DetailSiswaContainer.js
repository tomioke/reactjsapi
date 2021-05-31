import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponent from '../components/BackComponent';

export default class DetailSiswaContainer extends Component {
  render() {
    return (
      <Container>
        <h1>Halaman details</h1>
        <BackComponent />
      </Container>
    );
  }
}
