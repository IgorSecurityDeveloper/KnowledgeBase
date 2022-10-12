import './App.css';
import icon from './images/icon.png';
import KbAccordion from './components/KbAccordion';

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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle aw" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Perfil
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Verificar Perfil</a></li>
                  <li><a className="dropdown-item" href="#">Apoie</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Configurações</a></li>
                </ul>
              </li>
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

        <KbAccordion />

      </div>
    </>
  );
}

export default App;
