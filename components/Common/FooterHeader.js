import React from 'react';

const FooterHeader = ({ inicio }) => {

  return (
    <div className="footerHeader">
      <a href={`#${inicio}`} className="voltar" id="voltarAoInicio" role="cabecalhoFooter">Voltar ao início</a>
    </div>
  );
}

export default FooterHeader;