function DoencaCard({tipoDoenca, nomeDoenca, infoGerais, infoGeraisImg}) {
    return (
        <>
        {/* Futuramente buscar esses dados pelo Banco de dados KB-BD */}
            <div className="card ml w-50 p-3">
                <img src={infoGeraisImg} className="card-img-top" alt="Imagem de uma doença" />
                <div className="card-body">
                    <h5 className="card-title">{tipoDoenca} : {nomeDoenca}</h5>
                    <p className="card-text">{infoGerais}</p>
                    <a href="#" className="btn btn-primary">Mais informações</a>
                </div>
            </div>
        </>
    );
}

export default DoencaCard;