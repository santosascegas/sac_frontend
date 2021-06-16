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
      <section className="quemSomos" id="quemSomos" role="quemSomos">
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
                alt="Membros do projeto 1: Imagem de 5 pessoas divididas em 5 quadrados sendo 3 acima e 2 abaixo. Na primeira linha são 2 homens e uma mulher e na segunda linha, um homem e uma mulher." 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/equipe2.jpg" 
                alt="Membros do projeto 2: Imagem de 5 pessoas divididas em 5 quadrados sendo 3 acima e 2 abaixo. Na primeira linha, um homem e duas mulheres e na segunda linha, uma mulher e um homem." 
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col lg={4}>
              <img 
                src="./images/quem-somos/equipe3.jpg" 
                alt="Membros do projeto 3: Imagem de 4 pessoas divididas em 4 quadrados sendo 3 acima e uma abaixo. Na primeira linha, três homem na segunda linha, uma mulher." 
                className="img-fluid mx-auto d-block"
              />
            </Col>
          </Row>

          <Row className="logos">
            <Col lg={4}>
              <a href="https://unisantos.br/" target="_blank">
                <img 
                  src="./images/quem-somos/logo1.png" 
                  alt="Universidade: Marca Universidade Católica de Santos. Brasão à esquerda e texto em azul escuro à direita" 
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </Col>
            <Col lg={4}>
              <a href="https://www.facebook.com/codepsantos/" target="_blank">
                <img 
                  src="./images/quem-somos/logo2.png" 
                  alt="Codep: Marca Codep. Codep escrito na parte superior na cor azul e a letra O em cinza. Abaixo está escrito na cor preta: Coordenadoria de Defesa de Políticas para Pessoas com Deficiência"
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </Col>
            <Col lg={4}>
              <a href="https://www.tecnocubo.com.br/" target="_blank">
                <img 
                  src="./images/quem-somos/logo3.png" 
                  alt="Tecnocubo: Marca Tecnocubo, acima um quadrado dividido em 4 quadrados menores separadamente. Cada um deles com um tom de roxo. Abaixo, duas linhas de texto. Na primeira linha, em preto, texto TECNOCUBO. Na segunda,  soluções 3D." 
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </Col>
            <Col lg={4} className="mt-3">
              <a href="https://voolt3d.com.br/" target="_blank">
                <img 
                  src="./images/quem-somos/logo4.png" 
                  alt="Voolt3d: Marca Voolt 3d. Texto escrito VOOLT 3D na cor azul escuro. Após a palavra VOOLT há um desenho de um bico de impressora 3d em forma de V, na cor preta." 
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </Col>
          </Row>

          <div className="alunos">
            <p>Este site foi desenvolvido por estudantes dos cursos de Ciência da Computação e Sistema da Informação da Unisantos sob a orientação do professor Thiago Ferauche, no primeiro semestre de 2021.</p>
            <img 
                src="./images/quem-somos/devs.png" 
                alt="Membros da Unisantos: Imagem de 9 pessoas divididas em 9 quadrados sendo 5 acima e 4 abaixo. Na primeira linha, duas mulheres e três homens e na segunda linha, uma mulher e três homens." 
                className="img-fluid mx-auto d-block"
            />
          </div>

        </Container>
      </section>
    </Layout>
  )
}
export default Index;