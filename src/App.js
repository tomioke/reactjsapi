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
import axios from 'axios';

export default class App extends Component {
  // Masukkan judul
  state = {
    title: 'Data Siswa',
    // Menampilkan data siswa
    user: [],
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
