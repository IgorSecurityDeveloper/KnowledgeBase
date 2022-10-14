import './App.css';
import icon from './images/icon.png';
import celula from "./images/celula.jpg";
import KbAccordion from './components/accordions/KbAccordion';
import giardia from "./images/giardia.webp"
import DoencaCard from './components/cards/DoencaCard';

function App() {
  return (

    <>

      <nav className="navbar navbar-expand-lg bg-dark shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={icon} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active aw" aria-current="page" href="#">Início</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle aw" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Perfil
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Verificar Perfil</a></li>
                  <li><a className="dropdown-item" href="#">Apoie</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Configurações</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link aw" href="" alt="Voltar para o início">Categorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link aw" href="#">Informações</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">


        <KbAccordion
          tipoDoenca="Verme "
          nomeDoenca=" Giárdia"
          infoGerais="um dos tipos de vermes em gatos mais comuns, a giárdia também é considerada uma zoonose. Causada pelo parasita Giardia lamblia, esse verme de gato contamina o felino depois que ele ingere algo contaminado com a doença. É comum aparecer em água não filtrada, alimentos que não foram bem lavados e objetos compartilhados entre animais infectados."
          infoGeraisImg={giardia}
          infoSintomas="Os sintomas mais comuns são fezes líquidas ou pastosas, com cheiro forte e que podem ser esverdeadas, falta de apetite, perda de peso, pelos sem brilho e com queda acentuada, vômitos, sensibilidade abdominal, flatulência, desidratação, fraqueza."
          infoTratamento="A medicação prescrita, na maioria dos casos, é o metronidazol, e este não deve ser administrado em fêmeas prenhes. Outras medicações como o albendazol, o fembendazol e a combinação de febantel/pirantel/praziquantel também podem ser prescritos pelo Médico-Veterinário."
        />

        <br />

        <DoencaCard ImgDoenca={celula} />

        <DoencaCard ImgDoenca={celula} />
        
        <DoencaCard ImgDoenca={celula} />

      </div>
    </>
  );
}

export default App;
