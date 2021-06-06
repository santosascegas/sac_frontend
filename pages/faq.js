import React from 'react';

import Layout from "../components/Common/Layout";

import { 
  Container, 
  Row, 
  Col 
} from "reactstrap";

import { duvidasFrequentes } from '../helpers/DuvidasFrequentes'; 

const Index = () => {

  return (
    <Layout pageTitle="Santos as Cegas | Dúvidas Frequentes" inicio="faq">
      <section className="faq" id="faq">
        <Container>
          <h2>Dúvidas Frequentes</h2>

          <Row className="duvidasRow">
            { duvidasFrequentes.map((df, idx) => (
              <Col lg={6} id={idx % 2 != 0 ? 'impar' : 'par'}>
                <div className="duvidasCard">
                  <strong>{df.titulo}</strong>
                  <p>{df.corpo}</p>
                </div>
              </Col>
            ))}
          </Row>
         
        </Container>
      </section>
    </Layout>
  )
}
export default Index;