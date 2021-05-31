import React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import TableComponent from '../components/TabelComponent';

export default class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <TableComponent user={this.props.user} />
      </Container>
    );
  }
}
