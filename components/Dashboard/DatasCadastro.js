import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

import { FaTrash } from 'react-icons/fa';

import DatePicker from 'reactstrap-date-picker';
import TimePicker from 'react-time-picker/dist/entry.nostyle'

const DatasCadastro = ({ datas }) => {
  const [dataCalendario, setDataCalendario] = React.useState('')
  const [dataHorario, setDataHorario] = React.useState('')

  const [datasDisponiveis, setDatasDisponiveis] = React.useState([...datas]);

  
  const handleSubmit = () => {
    const merged = dataCalendario + ' ' + dataHorario;
    const currentDatas = datasDisponiveis;

    currentDatas.push(merged)
    
    setDatasDisponiveis(currentDatas)
  }

  return (
    <Container style={{ marginBottom: 15 }}>
      <Row>
        <Col lg={4}>
          { datasDisponiveis.map((dt) => (
            <Row>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>{dt}</p>
                <Button className="deleteData">
                  <FaTrash size={18} />
                </Button>
              </div>
            </Row>
          )) }
        </Col>

        <Col lg={8}>
          <Row>
            <Col lg={7}>
              <DatePicker 
                value={dataCalendario}
                onChange={(val) => {
                  const splitted = val.split('T');
                  setDataCalendario(splitted[0])
                }}
              />
            </Col>
            <Col lg={5}>
              <TimePicker 
                value={dataHorario}
                onChange={setDataHorario}
              />
            </Col>

            <Button style={{ width: '30%', marginLeft: '0.8rem', marginTop: '1rem' }} onClick={handleSubmit}>
              Adicionar nova data
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default DatasCadastro;