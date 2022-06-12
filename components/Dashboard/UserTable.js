import React from 'react'
import { Table } from "reactstrap"

import { convertDateToObject } from '../../helpers/convertDateToObject'

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
        agendamentos.map((data, key) => {
          const date_obj = convertDateToObject(data.agenda.date)
          return (
            <tr key={key}>
              <th scope="row">{date_obj.date} - {date_obj.time}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.idDocument}</td>
              <td>{data.phone}</td>
              <td>{data.doctorsNote == 1 ? 'Sim' : 'Não'}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
  )
}

export default UserTable