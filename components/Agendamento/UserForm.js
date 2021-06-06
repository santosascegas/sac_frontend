import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const UserForm = ({ setUserInfo }) => {
  
  const [nome, setNome] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [documento, setDocumento] = React.useState(null)

  const handleSubmit = () => {
    const dados = {
      nome,
      email,
      documento
    };
    setUserInfo(dados);
  }

  return (
      <>
        <h3>Preencha com suas informações</h3>
        <Form className="userForm">
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" id="nome" onChange={(e) => {setNome(e.target.value)}}/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          </FormGroup>
          <FormGroup>
            <Label for="documento">Número RG ou RNE</Label>
            <Input type="number" name="documento" id="documento" onChange={(e) => {setDocumento(e.target.value)}}/>
          </FormGroup>
        </Form>

        <Button onClick={handleSubmit}>
          Próximo
        </Button>
      </>
  );
}
export default UserForm;