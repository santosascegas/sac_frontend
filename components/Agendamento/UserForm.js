import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import InputMask from 'react-input-mask';

const UserForm = ({ setUserInfo }) => {
  
  const [nome, setNome] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [documento, setDocumento] = React.useState(null)
  const [telefone, setTelefone] = React.useState(null)

  const [error, setError] = React.useState(null);

  const handleSubmit = () => {
    if (!/.+@.+\..+/.test(email)) {
      setError('Endereço de email inválido. Por favor, preencha com dados válidos');
      return;
    }

    const regexTelefone = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

    if (regexTelefone.test(telefone)) {
      setError('Número de telefone inválido. Por favor, preencha com dados válidos');
      return;
    }

    const dados = {
      nome,
      email,
      documento,
      telefone
    };
    
    setError(null);
    setUserInfo(dados);
  }

  return (
      <>
        <h3>Preencha com suas informações</h3>

        { error && (
          <p style={{ color: 'red' }}>{error}</p>
        ) }
        <Form className="userForm">
          <FormGroup className="required">
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" id="nome" onChange={(e) => {setNome(e.target.value)}}/>
          </FormGroup>
          <FormGroup className="required">
            <Label for="Email">E-mail</Label>
            <Input type="email" name="email" id="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          </FormGroup>
          <FormGroup className="required">
            <Label for="documento">Número RG ou RNE</Label>
            <Input type="number" name="documento" id="documento" onChange={(e) => {setDocumento(e.target.value)}}/>
          </FormGroup>
          <FormGroup className="required">
            <Label for="telefone">Telefone</Label>
            <InputMask mask="(99) 99999-9999" value={telefone} onChange={(e) => {setTelefone(e.target.value)}}>
              {(inputProps) => <Input {...inputProps} name="telefone" id="telefone" />}
            </InputMask>
          </FormGroup>
        </Form>

        <Button onClick={handleSubmit} disabled={!nome || !email || !documento} className="actionButton">
          Próximo
        </Button>
      </>
  );
}
export default UserForm;