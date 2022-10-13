function KbAccordion({ tipoDoenca, nomeDoenca, infoGerais, infoGeraisImg, infoSintomas, infoTratamento }) {

  return (
<>
    <h1 className="title mt-4">Doença {tipoDoenca}:{nomeDoenca}</h1>

    <div className="accordion mt-4 shadow" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Informações gerais</strong>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p>{infoGerais}</p> <img src={infoGeraisImg} className="img-fluid rounded mx-auto d-block mt-4" alt="Imagem Doença"/>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Sintomas</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p>{infoSintomas}</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Tratamento</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p>{infoTratamento}</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );

}

export default KbAccordion;