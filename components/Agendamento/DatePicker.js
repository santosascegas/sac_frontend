import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

const DatePicker = ({ datas, setData }) => (
      <>
        {
          datas.length > 0 ? (
            <>
              <h3>Escolha uma Data Disponível</h3>
              <Row className="dateRow">
              {
                datas.map((dt, key) => {
                  const data = dt.data;
                  const dia = data.split('&')[0];
                  const horario = data.split('&')[1];

                  return (
                    <Col key={key} lg={3} md={6}>
                      <Button className="dateButton" onClick={() => {setData(dt)}}>
                       <span>
                        <strong>
                            {dia}
                          </strong>
                       </span>
                        <span>
                          {horario}
                        </span>
                      </Button>
                    </Col>
                  )
                }
                
                )
              }
              </Row>
            </>
          ) :
          <h3>Nenhuma data disponível para agendamento.</h3>
        }
      </>
  );

export default DatePicker;