import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ClienteDataService from "../services/ClienteService";

const Cliente = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  
  const novoCliente = {
    id: null,
    cliente: "",
    email:"",
    telefone:"",
    cnpj:"",
    endereco:"",
    cidade:"",
    published: false
    };
  
  const [clienteAtual, setClienteAtual] = useState(novoCliente);

  const getCliente = id => {
    ClienteDataService.get(id)
      .then(response => {
        setClienteAtual(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getCliente(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClienteAtual({ ...clienteAtual, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: clienteAtual.id,
      cliente: clienteAtual.cliente,
      email: clienteAtual.email,
      telefone: clienteAtual.telefone,
      cnpj: clienteAtual.cnpj,
      cep: clienteAtual.cep,
      endereco: clienteAtual.endereco,
      cidade: clienteAtual.cidade,
    };

    ClienteDataService.update(clienteAtual.id, data)
      .then(response => {
        setClienteAtual({ ...clienteAtual, status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCliente = () => {
    ClienteDataService.update(clienteAtual.id, clienteAtual)
      .then(response => {
        console.log(response.data);
        navigate("/clientes");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCliente = () => {
    ClienteDataService.remove(clienteAtual.id)
      .then(response => {
        console.log(response.data);
        navigate("/clientes");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {clienteAtual ? (
        <div className="edit-form">
          <h4>Cliente</h4>
          <form>
            <div className="form-group">
              <label htmlFor="cliente">Nome</label>
              <input
                type="text"
                className="form-control"
                id="cliente"
                name="cliente"
                value={clienteAtual.cliente}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required value={clienteAtual.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                name="telefone"
                required value={clienteAtual.telefone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                className="form-control"
                id="cnpj"
                name="cnpj"
                value={clienteAtual.cnpj}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cnpj">CEP</label>
              <input
                type="text"
                className="form-control"
                id="cep"
                name="cep"
                value={clienteAtual.cep}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="endereco"
                name="endereco"
                value={clienteAtual.endereco}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="cidade"
                name="cidade"
                value={clienteAtual.cidade}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteCliente}>
            Excluir
          </button>

          <button type="submit" className="badge badge-success"
              onClick={updateCliente}          >
            Atualizar
          </button>
          
        </div> ) : (<div></div>)}
    </div>
  );
};
export default Cliente;