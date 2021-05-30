import React from 'react';
import { Component } from 'react';
import TableComponent from '../components/TabelComponent';

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <TableComponent user={this.props.user} />
      </div>
    );
  }
}
