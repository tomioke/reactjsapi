import React, { Component } from 'react';
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponents from './components/NavbarComponents';

export default class App extends Component {
  // Masukkan judul
  state = {
    title: 'Data Siswa',
  };
  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        <NavbarComponents />
        <JumbotronComponent title={this.state.title} />
      </div>
    );
  }
}
