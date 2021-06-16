import React from 'react';

const FooterHeader = ({ inicio }) => {

  return (
    <div className="footerHeader">
      <a href={`#${inicio}`} className="voltar" id="voltarAoInicio" aria-label="Botao de voltar ao inicio da tela">Voltar ao início</a>
    </div>
  );
}

export default FooterHeader;