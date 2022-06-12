import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Button, FormGroup } from "reactstrap"
import { FaTrash } from 'react-icons/fa'

import { convertDateToObject } from '../../helpers/convertDateToObject'

import Cookies from 'universal-cookie'
import axios from 'axios'
import { RefreshToken } from '../../helpers/refreshToken'

import DatePicker, { registerLocale } from 'react-datepicker'
import TimePicker from 'react-time-picker/dist/entry.nostyle'
//import "react-clock/dist/Clock.css"

import "react-datepicker/dist/react-datepicker.css"
import ptbr from 'date-fns/locale/pt-BR'
registerLocale('pt-BR', ptbr)

const DatasCadastro = ({ datas, setDatas }) => {
  const cookies = new Cookies()
  const [modal, setModal] = useState(false)
  const [dataCalendario, setDataCalendario] = useState('')
  const [dataHorario, setDataHorario] = useState('')

  const toggleModal = () => {
    if (modal) setDeleteDataInfo({})  
    setModal(!modal)
  }

  const handleSubmit = () => {
    
  }

  const handleDelete = async (agenda_id, key) => {
    const rt = await cookies.get('refresh_token')
    const config = await RefreshToken(rt)
    
    try {
      await axios.delete(`http://localhost:8080/agenda/${agenda_id}`, config)
    } catch (error) {
      console.log(error)
    }

    setDatas(datas.filter((_,i) => i !== key))
  }

  return (
    <Container style={{ marginBottom: 15 }}>
      <Row>
        <Col lg={4}>
          {
            Object.keys(datas).map( (_, key) => {
              const date_obj = convertDateToObject(datas[key].date)
              return (
                <Row key={key}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>{date_obj.date} - {date_obj.time}</p>
                    <Button className="deleteData" onClick={ () => {handleDelete(datas[key].id, key)} }>
                      <FaTrash size={18} />
                    </Button>
                  </div>
                </Row>
              )
            })
          }
        </Col>

        <Col lg={8}>
          <Row>
            <Col lg={7}>
              <FormGroup>
              <DatePicker selected={dataCalendario} onChange={(date) => setDataCalendario(date)} locale="pt-BR" />
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
  )
}
export default DatasCadastro