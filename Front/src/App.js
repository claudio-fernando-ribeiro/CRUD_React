import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddCliente from "./components/AddCliente";
import Cliente from "./components/Cliente";
import ListaDeCadastro from "./components/ListaDeCadastro";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
    <div>
      <div className="registro">
        <p>Clientes</p>
        <p><Link to={"/clientes"} className="nav-link">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link"/> Registro de clientes 
            </Link></p>
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<ListaDeCadastro/>} />
          <Route path="/clientes" element={<ListaDeCadastro/>} />
          <Route path="/add" element={<AddCliente/>} />
          <Route path="/clientes/:id" element={<Cliente/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;