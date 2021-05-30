// Source https://react-bootstrap-table.github.io/
import { faEdit, faInfo, faPlusSquare, faPrint, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
// Load library search
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
// Load library pagination
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const { SearchBar } = Search;
const columns = [
  {
    dataField: 'id_siswa',
    text: 'ID',
    // Mengurutkan / sort data
    sort: true,
    // Atur lebar header agar terlihat rapi
    headerStyle: () => {
      return { width: '5%' };
    },
  },
  {
    dataField: 'nim',
    text: 'NIM SISWA',
    sort: true,
    // Atur lebar header agar terlihat rapi
    headerStyle: () => {
      return { width: '20%' };
    },
  },
  {
    dataField: 'nama',
    text: 'NAMA LENGKAP',
    sort: true,
  },
  {
    dataField: 'link',
    text: 'ACTION',
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={'detail/' + row.id}>
            <Button color="primary" className="mr-2">
              <FontAwesomeIcon icon={faInfo} />
              &nbsp;Detail
            </Button>
          </Link>
          <Link to={'edit/' + row.id}>
            <Button color="success" className="mr-2">
              <FontAwesomeIcon icon={faEdit} />
              &nbsp;Edit
            </Button>
          </Link>
          <Link to={'delete/' + row.id}>
            <Button color="danger" className="mr-2">
              <FontAwesomeIcon icon={faTrash} />
              &nbsp;Delete
            </Button>
          </Link>
          <Link to={'print/' + row.id}>
            <Button color="secondary">
              <FontAwesomeIcon icon={faPrint} />
              &nbsp;Print
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: 'nim',
    order: 'desc',
  },
];

const TabelComponent = (props) => {
  return (
    <div>
      {/* Data didapat dari App.js user */}
      <Container>
        {/* <BootstrapTable  /> */}
        {/* Ini bagian search */}
        <ToolkitProvider bootstrap4 keyField="id" data={props.user} columns={columns} defaultSorted={defaultSorted} search>
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={'create/'}>
                    <Button color="primary" className="mr-2">
                      <FontAwesomeIcon icon={faPlusSquare} />
                      &nbsp;Create Siswa
                    </Button>
                  </Link>
                </Col>

                <Col>
                  {/* <h3>Input something at below input field:</h3> */}
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Cari.." />
                  </div>
                </Col>
              </Row>
              <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TabelComponent;
