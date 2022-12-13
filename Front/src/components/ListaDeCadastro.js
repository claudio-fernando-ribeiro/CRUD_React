import React, { useState, useEffect } from "react";
import ClienteDataService from "../services/ClienteService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faIdCard, faLocationDot, faMapLocationDot, faMapPin, faPhone, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import AddCliente from "./AddCliente";

const ListaDeCadastro = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteAtual, setClienteAtual] = useState(null);
  const [listaAtual, setListaAtual] = useState(-1);
  const [pesquisarNome, setPesquisarNome] = useState("");

  useEffect(() => {
    recuperarNomes();
  }, []);

  const alterarPesquisa = e => {
    const pesquisarNome = e.target.value;
    setPesquisarNome(pesquisarNome);
  };

  const recuperarNomes = () => {
    ClienteDataService.getAll()
      .then(response => {
        setClientes(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const atualizarLista = () => {
    recuperarNomes();
    setClienteAtual(null);
    setListaAtual(-1);
  };

  const setNomeAtual = (cliente, index) => {
    setClienteAtual(cliente);
    setListaAtual(index);
  };

  const buscarNome = () => {
    ClienteDataService.buscarNome(pesquisarNome)
      .then(response => {
        setClientes(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const [modalIsOpen, setIsOpen] = useState(false);
      function handleOpenModal() {
        setIsOpen(true)}
      function handleCloseModal(e) {
        setIsOpen(false);
        atualizarLista(e)}

  return (
      <div className="container">
        <div className="pesquisar">
          <div>
            <button className="btn btn-primary btn-sm" id="novo-registro" onClick={handleOpenModal}>Novo registro</button> 
              <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
              <button className="fechar" onClick={handleCloseModal} ><FontAwesomeIcon icon={faXmark}/></button> 
                <AddCliente/>
              </ReactModal>
          </div>

        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              placeholder="Pesquisar"
              value={pesquisarNome}
              onChange={alterarPesquisa}/>
            <div>
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                onClick={buscarNome}>
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </div> 

      <div className="conainer">
        <table className="table">
            <thead>
                <tr className="table-sm">
                    <th><FontAwesomeIcon icon={faUser}/> Nome do cliente</th>
                    <th><FontAwesomeIcon icon={faAt}/> Email</th>
                    <th><FontAwesomeIcon icon={faPhone}/> Telefone</th>
                    <th><FontAwesomeIcon icon={faIdCard}/> CNPJ</th>
                    <th><FontAwesomeIcon icon={faMapPin}/> CEP</th>
                    <th><FontAwesomeIcon icon={faLocationDot}/> Endereço</th>
                    <th><FontAwesomeIcon icon={faMapLocationDot}/> Cidade</th>
                </tr>
            </thead>
            <tbody>
                {clientes &&
                    clientes.map((cliente, index) => (
                <tr
                className={
                    "table" + (index === listaAtual ? "active" : "")
                  }
                  onClick={() => setNomeAtual(cliente, index)}
                  key={index}
                >
                    <td>{cliente.cliente}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone} </td>
                    <td>{cliente.cnpj} </td>
                    <td>{cliente.cep}</td>
                    <td>{cliente.endereco} </td>
                    <td>{cliente.cidade} </td>
                </tr>
                ))}
              </tbody>
          </table>
      </div>

      <div className="col-md-6">
        {clienteAtual ? (
          <div>
            <h4>Cadastro</h4>
            <div>
              <label>
                <strong>Nome:</strong>
              </label>{" "}
              {clienteAtual.cliente}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {clienteAtual.email}
            </div>
            <div>
              <label>
                <strong>telefone:</strong>
              </label>{" "}
              {clienteAtual.telefone}
            </div>
            <div>
              <label>
                <strong>CNPJ:</strong>
              </label>{" "}
              {clienteAtual.cnpj}
            </div>
            <div>
              <label>
                <strong>Endereço:</strong>
              </label>{" "}
              {clienteAtual.endereco}
            </div>
            <div>
              <label>
                <strong>Cidade:</strong>
              </label>{" "}
              {clienteAtual.cidade}
            </div>
            <Link to={"/clientes/" + clienteAtual.id}
                className="btn btn-warning">
              Editar
            </Link>
          </div>
        ) : (
          <div> 
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaDeCadastro;