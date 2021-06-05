import React from 'react';
import { Table } from "reactstrap";

const UserTable = ({ agendamentos }) => {
  
  return (
    <Table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Documento</th>
        <th>Telefone</th>
        <th>Atestado</th>
      </tr>
    </thead>
    <tbody>
      {
        agendamentos.map((a, key) => (
          <tr key={key}>
            <th scope="row">{a.data}</th>
            <td>{a.nome}</td>
            <td>{a.email}</td>
            <td>{a.documento}</td>
            <td>{a.telefone}</td>
            <td>{a.atestado}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
  );
}
export default UserTable;