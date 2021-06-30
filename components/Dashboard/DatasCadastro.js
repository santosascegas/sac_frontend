import React from 'react';
import axios from 'axios';

import { Container, Row, Col, Button, FormGroup, Modal, ModalHeader, ModalFooter } from "reactstrap";

import { FaTrash } from 'react-icons/fa';

import DatePicker from 'reactstrap-date-picker';
import TimePicker from 'react-time-picker/dist/entry.nostyle';

import { get_cookie } from '../../helpers/cookies';

const DatasCadastro = ({ datas, setDatas }) => {
  const [dataCalendario, setDataCalendario] = React.useState('');
  const [dataHorario, setDataHorario] = React.useState('');
  const [deleteDataInfo, setDeleteDataInfo] = React.useState({});
  const [modal, setModal] = React.useState(false);

  const config = { headers: { 'Authorization': get_cookie('authorization') } }

  const handleSubmit = async () => {
    const splitData = dataCalendario.split('-');
    const newData = splitData[2] + "/" + splitData[1] + "/" + splitData[0];
    const merged = newData + '&' + dataHorario;
    const currentDatas = datas;

    const data = {
      data: merged,
      status: 0,
    };

    try {
      // const res = await axios.post('http://localhost:8080/datas', data, config);
      currentDatas.push(res.data)
    } catch (error) {
      console.log(error);
    }


    setDatas(currentDatas);
  }

  const toggleModal = () => {
    if (modal) setDeleteDataInfo({})  
    setModal(!modal)
  };

  const handleDelete = async () => {
    const currentDatas = datas;
    currentDatas.splice(deleteDataInfo.idx, 1);

    try {
      // await axios.delete(`http://localhost:8080/datas/${deleteDataInfo.id}`, config);
    } catch (error) {
      console.log(error);
    }

    toggleModal();

    setDatas(currentDatas);
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
                  <Button className="deleteData" onClick={() => {
                    setDeleteDataInfo({ idx, id });
                    toggleModal();
                  }}>
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
                  autoComplete="off"
                  dayLabels={['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sex', 'Sáb']}
                  monthLabels={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
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

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Tem certeza que deseja deletar esta data?</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={handleDelete}>Deletar</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
export default DatasCadastro;