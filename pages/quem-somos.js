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
    <Layout pageTitle="Santos as Cegas | Quem Somos" inicio="quemSomos" neverStick={true}>
      <section className="quemSomos" id="quemSomos">
        <Container>
          <h2>Quem Somos</h2>

          <div className="intro">
            <strong>Santos às Cegas, projeto aprovado pela Secretaria de Cultura de Santos, “Prêmio Alcides Mesquita, tem inclusão, cultura, espaços urbanos e monumentos no roteiro da “Tri-Lha”</strong>
            <p>O projeto “Santos às cegas” tem a liderança de Renato Frosch e o apoio de um grupo de 15 pessoas e empresas que colaborativamente apoiam as ações.</p>
          </div>

          <Row>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/equipe1.jpg" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/equipe2.jpg" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/equipe3.jpg" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
          </Row>

          <Row className="logos">
            <Col lg={4}>
              <img 
                src="./images/quem-somos/logo1.png" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/logo2.png" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/logo3.png" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4} className="mt-3">
              <img 
                src="./images/quem-somos/logo4.png" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </Col>
          </Row>

          <div className="alunos">
            <p>Este site foi desenvolvido por estudantes dos cursos de Ciência da Computação e Sistema da Informação da Unisantos sob a orientação do professor Thiago Ferauche, no primeiro semestre de 2021.</p>
            <img 
                src="./images/quem-somos/devs.png" 
                alt="" 
                className="img-fluid mx-auto d-block"
            />
          </div>

        </Container>
      </section>
    </Layout>
  )
}
export default Index;