import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

const DatePicker = ({ setData }) => {
  
  const Horarios = [
    { dia: "Sexta Feira", horario: "09:30", data: "04/06/2021"},
    { dia: "Segunda Feira", horario: "09:30", data: "07/06/2021"},
    { dia: "Quarta Feira", horario: "11:40", data: "09/06/2021"},
    { dia: "Sexta Feira", horario: "11:40", data: "11/06/2021"},
  ]
  
  return (
      <>
        <h3>Escolha uma Data Disponível</h3>
        <Row className="dateRow">
          {
            Horarios.map((horario, key) =>
              <Col key={key} lg={3} md={6}>
                <Button className="dateButton" onClick={() => {setData(horario)}}>
                  <span>
                    <strong>{horario.horario}</strong>
                  </span>
                  <span>
                    {horario.data}
                  </span>
                  <span>
                    {horario.dia}
                  </span>
                </Button>
              </Col>
            )
          }
        </Row>
      </>
  );
}
export default DatePicker;