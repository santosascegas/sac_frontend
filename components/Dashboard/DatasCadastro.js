import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Button, FormGroup } from "reactstrap"
import { FaTrash } from 'react-icons/fa'

import { convertDateToObject } from '../../helpers/convertDateToObject'

import axios from 'axios'
import { RefreshToken } from '../../helpers/refreshToken'

import DatePicker, { registerLocale } from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"
import ptbr from 'date-fns/locale/pt-BR'

import "react-calendar/dist/Calendar.css"

registerLocale('pt-BR', ptbr)

const DatasCadastro = ({ datas, setDatas }) => {
  let token
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('refresh_token')
  }
  const [modal, setModal] = useState(false)
  const [dataCalendario, setDataCalendario] = useState('')

  const toggleModal = () => {
    if (modal) setDeleteDataInfo({})  
    setModal(!modal)
  }

  const CustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "solid 1px pink" }}
    />
  )

  const requestNewDates = async () => {
    const config = await RefreshToken(token)

    await axios.get("http://localhost:8080/agenda/", config).then( (response) => {
      setDatas(response.data)
    }).catch( (error) => {
      console.log(error)
    } )
  }

  const handleSubmit = async (date) => {
    if (date !== "") {
      const time_in_ISO_format = date.toISOString()
      const obj = { "date": time_in_ISO_format }
      const config = await RefreshToken(token)
  
      try {
        await axios.post("http://localhost:8080/agenda", obj, config).then( async (response) => {
          requestNewDates()
        })
      } catch (error) {
        console.log(error)
      }
    }
    
  }

  const handleDelete = async (agenda_id, key) => {
    const config = await RefreshToken(token)
    
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
          (datas.length > 0) ?
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
          :
          <span>Não há datas cadastradas!</span>
        }
      </Col>
      <Col lg={8}>
        <Row>
          <Col lg={7}>
            <FormGroup>
              <DatePicker
                selected={dataCalendario}
                onChange={(date) => setDataCalendario(date)}
                locale="pt-BR"
                dateFormat={"dd/MM/yyyy"}
                customTimeInput={<CustomTimeInput />}
                showTimeInput />
              <Button style={{ marginTop: '1rem' }} onClick={() => handleSubmit(dataCalendario)}>
                Adicionar nova data
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}
export default DatasCadastro