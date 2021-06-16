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
        agendamentos.map((a, key) => {
          const split = a.data?.data.split('&');
          return (
            <tr key={key}>
              <th scope="row">{split[0]} - {split[1]}</th>
              <td>{a.nomeUsuario}</td>
              <td>{a.emailUsuario}</td>
              <td>{a.documento}</td>
              <td>{a.telefone}</td>
              <td>{a.atestado == 1 ? 'Sim' : 'Não'}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
  );
}
export default UserTable;