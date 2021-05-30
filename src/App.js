import React, { Component } from 'react';
// import file dari folder components
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponents from './components/NavbarComponents';
import TabelComponent from './components/TabelComponent';

export default class App extends Component {
  // Masukkan judul
  state = {
    title: 'Data Siswa',
    user: [
      {
        id_siswa: 1,
        nim: 'TI001',
        nama: 'TOMI IRVAN OKTAVIANTO',
      },
      {
        id_siswa: 2,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 3,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 4,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 5,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 6,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 7,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 8,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 9,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 10,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 11,
        nim: 'TI002',
        nama: 'ANNISA',
      },
      {
        id_siswa: 12,
        nim: 'TI002',
        nama: 'ANNISA',
      },
    ],
  };

  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        {/* Ini adalah bagian yang di tampilkan di browser */}
        <NavbarComponents />
        {/* Menampilkan judul */}
        <JumbotronComponent title={this.state.title} />
        {/* Menampilkan data user */}
        <TabelComponent user={this.state.user} />
      </div>
    );
  }
}
