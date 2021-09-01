/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import logo from "./assets/bug.svg";
import imagem_um from "./assets/bug-1.png";
import imagem_dois from "./assets/bug-2.png";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <p>Sobre</p>
          <p>Serviços</p>
          <p>Contato</p>
        </div>
      </header>

      <div className="container">
        <h1>
          Facilisis sit tristique at risus hendrerit eu.
        </h1>
        <p className="paragrafo central">
          Quis sed ullamcorper sed eget est, nunc. Sollicitudin mattis consequat interdum sagittis nibh tincidunt
          turpis. Euismod eget auctor eget enim scelerisque netus.
        </p>
        <div className="galeria central">
          <img className="img" src={imagem_um} alt="" />
          <img class="img cima" src={imagem_dois} alt="" />
        </div>
        <p className="paragrafo central">
          Quis sed ullamcorper sed eget est, nunc. Sollicitudin mattis consequat interdum sagittis nibh tincidunt
          turpis. Euismod eget auctor eget enim scelerisque netus.
        </p>
      </div>
    </>
  );
}

export default App;


