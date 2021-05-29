import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
const columns = [
  {
    dataField: 'id_siswa',
    text: 'ID',
  },
  {
    dataField: 'nim',
    text: 'NIM SISWA',
  },
  {
    dataField: 'nama',
    text: 'NAMA LENGKAP',
  },
];

const TabelComponent = (props) => {
  return (
    <div>
      <BootstrapTable keyField="id" data={props.user} columns={columns} />
    </div>
  );
};

export default TabelComponent;
