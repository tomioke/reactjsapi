import React, { Component } from 'react';
// import file dari folder components
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponents from './components/NavbarComponents';
// import TabelComponent from './components/TabelComponent';
// Import react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './conContainer/HomeContainer';
import CreateSiswaContainer from './conContainer/CreateSiswaContainer';
import EditSiswaContainer from './conContainer/EditSiswaContainer';
import DeleteSiswaContainer from './conContainer/DeleteSiswaContainer';
import PrintSiswaContainer from './conContainer/PrintSiswaContainer';
import DetailSiswaContainer from './conContainer/DetailSiswaContainer';
// import axios from 'axios';

export default class App extends Component {
  // Masukkan judul
  state = {
    title: 'Data Siswa',
    // Menampilkan data siswa
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
        nim: 'TI003',
        nama: 'BAGUS',
      },
      {
        id_siswa: 4,
        nim: 'TI004',
        nama: 'AGUNG',
      },
      {
        id_siswa: 5,
        nim: 'TI005',
        nama: 'DIMAS',
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

  // componentDidMount() {
  //   this.getAllData();
  // }
  // getAllData = () => {
  //   const url: 'http://localhost/apidatasiswa/api/method/read.php';
  //   axios.get(url).then {
  //     Response => this.setState{user:response.data.result}
  //   }
  // };
  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        {/* Ini adalah bagian yang di tampilkan di browser */}
        <NavbarComponents />
        {/* Menampilkan judul */}
        <JumbotronComponent title={this.state.title} />
        {/* Terhubung ke page lain */}
        <BrowserRouter>
          {/* Halaman home */}
          <Route path="/" exact>
            <HomeContainer user={this.state.user} />
          </Route>
          {/* Halaman Create */}
          <Route path="/create" exact>
            <CreateSiswaContainer />
          </Route>
          {/* Halaman Edit */}
          <Route path="/edit/:id" exact>
            <EditSiswaContainer />
          </Route>
          {/* Halaman delete */}
          <Route path="/delete/:id" exact>
            <DeleteSiswaContainer />
          </Route>
          {/* Halaman print */}
          <Route path="/print/:id" exact>
            <PrintSiswaContainer />
          </Route>
          {/* Halaman detail */}
          <Route path="/detail/:id" exact>
            <DetailSiswaContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
