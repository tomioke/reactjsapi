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
        gender: 'P',
        tanggal_lahir: '2000-10-12',
        tempat_lahir: 'KEBUMEN',
        kd_agama: '01',
        foto: 'tomy.jpg',
        id_rombel: '1',
      },
      {
        id_siswa: 2,
        nim: 'TI002',
        nama: 'ANNISA',
        gender: 'W',
        tanggal_lahir: '1986-05-03',
        tempat_lahir: 'CILACAP',
        kd_agama: '01',
        foto: 'ani.jpg',
        id_rombel: '1',
      },
    ],
  };

  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        {/* Ini adalah bagian yang di tampilkan di browser */}
        <NavbarComponents />
        <JumbotronComponent title={this.state.title} />
        <TabelComponent user={this.state.user} />
      </div>
    );
  }
}
