import React from 'react';
import axios from 'axios';

import { Container, Row, Col, Button, FormGroup, Label } from "reactstrap";

import { FaTrash } from 'react-icons/fa';

import DatePicker from 'reactstrap-date-picker';
import TimePicker from 'react-time-picker/dist/entry.nostyle'

const DatasCadastro = ({ datas, setDatas }) => {
  const [dataCalendario, setDataCalendario] = React.useState('')
  const [dataHorario, setDataHorario] = React.useState('')

  const handleSubmit = async () => {
    const splitData = dataCalendario.split('-');
    const newData = splitData[2] + "/" + splitData[1] + "/" + splitData[0];
    const merged = newData + '&' + dataHorario;
    const currentDatas = datas;

    currentDatas.push(merged)


    try {
      // await axios.post('http://localhost:8080/datas', {
      //   data: merged,
      //   status: 0
      // });
    } catch (error) {
      console.log(error);
    }

    setDatas(currentDatas);
  }

  const handleDelete = async (idx, id) => {
    const currentDatas = datas;
    const newDatas = currentDatas.splice(idx - 1, 1);

    try {
      // await axios.delete(`http://localhost:8080/datas/${id}`);
    } catch (error) {
      console.log(error);
    }


    setDatas(newDatas);
  }


  return (
    <Container style={{ marginBottom: 15 }}>
      <Row>
        <Col lg={4}>
          { datas.map((dt, idx) => {
            const id = dt.id;

            const data = typeof dt == 'object' ? dt.data : dt;
            const date = data.split('&')[0];
            const time = data.split('&')[1];
            return (
              <Row key={idx}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p>{date} - {time}</p>
                  <Button className="deleteData" onClick={() => {handleDelete(idx, id)}}>
                    <FaTrash size={18} />
                  </Button>
                </div>
              </Row>
            ); 
            })
          }
        </Col>

        <Col lg={8}>
          <Row>
            <Col lg={7}>
              <FormGroup>
                <DatePicker 
                  value={dataCalendario}
                  onChange={(val) => {
                    const splitted = val?.split('T');
                    setDataCalendario(splitted[0])
                  }}
                />
              </FormGroup>
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