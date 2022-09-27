import React from 'react'
import { Container, Row, Col, Button } from "reactstrap"
import { convertDateToObject } from '../../helpers/convertDateToObject'

const adjustForTimezone = (date, signal) => {
    var timeOffsetInMS = date.getTimezoneOffset() * 60000
    if (signal === "-") {
        date.setTime(date.getTime() - timeOffsetInMS)
    } else {
        date.setTime(date.getTime() + timeOffsetInMS)
    }
    return date
}

const parseIsoDatetime = (dtstr) => {
    var dt = dtstr.split(/[: T-]/).map(parseFloat)
    let date = new Date(dt[0], dt[1], dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0)

    date = adjustForTimezone(date, "-")
    
    return date
}

const DatePicker = ({ datas, setData }) => (
      <>
        {
          !!datas ? (
            <>
              <h4>Escolha uma Data Disponível</h4>
              <Row className="dateRow">
              {
                datas.map( (data, key) => {
                    let date = convertDateToObject(data.date)
                    return (
                    <Col key={key} lg={3} sm={6} xs={12}>
                      <Button className="dateButton" onClick={() => {setData({"id": key+1, "date": data.date})}} 
                        title="Botao Escolha Uma Data"
                        aria-label={`Dia: ${date.date} e Horario: ${date.time}`}>
                       <span>
                        <strong>
                            {date.date}
                          </strong>
                       </span>
                        <span>
                          {date.time}
                        </span>
                      </Button>
                    </Col>
                  )
                } )
              }
              </Row>
            </>
          ) :
          <h3>Nenhuma data disponível para agendamento.</h3>
        }
      </>
  )

export default DatePicker