import React from 'react';

import Layout from "../components/Common/Layout";

import { 
  Container, 
  Row, 
  Col 
} from "reactstrap";

import { trajetos } from '../helpers/Trajetos'; 

const Index = () => {

  return (
    <Layout pageTitle="Santos as Cegas | Trajeto" inicio="trajeto">
      <section className="trajeto" id="trajeto">
        <Container>
          <h2>Trajeto</h2>

            { trajetos.map((trajeto, idx) => (
              <Row key={idx} className="mt-5">
                <Col lg={4}>
                  <div className="trajetoImg">
                    <img 
                      src={trajeto.img}
                      alt={trajeto.alt}
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="corpoTrajeto">{trajeto.corpo}</div>
                </Col>
              </Row>
            ))}
         
        </Container>
      </section>
    </Layout>
  )
}
export default Index;