import React, { useState } from "react";
import ClienteDataService from "../services/ClienteService";
let Correios = require('node-cep-correios');
let correios = new Correios();

const AddCliente = () => {
  const novoClienteState = {
    id: null,
    cliente: "",
    email:"",
    telefone:"",
    cnpj:"",
    cep:"",
    endereco:"",
    cidade:"",
  };
  const [cliente, setCliente] = useState(novoClienteState);
  const [submeter, setSubmeter] = useState(false);
  let [mensagemErro, setMensagemErro] = useState(false);
  
  const validaCEP = event => {
    const { name, value } = event.target;
    console.log("validaCEPName " + name);
    if (name === 'cep') {
      let cep = parseInt(value);
     
      if (cep > 9999999) {
        correios.consultaCEP({ cep: cep.toString() })
          .then(result => {
            console.log(result);
            setCliente({ ...cliente, ['endereco']: result.address })
            setCliente({ ...cliente, ['cidade']: result.city })
          })
          .catch(error => {
            console.log(error);
          });
        setMensagemErro('');
      } else {
        console.log("entrei no else!");
        setMensagemErro('Cep é inválido');
      }
    }
    //setCliente({ ...cliente, [name]: value });
  };

  const validaCNPJ = event => {
    const { name, value } = event.target;
    console.log("validaCNPJ" + name);
    if (name === 'cnpj') {
      let cnpj = parseInt(value);
      console.log('cnpj.lenght ' + cnpj.length);
      if (cnpj > 9999999999999) {
        setMensagemErro('');
      } else {
        setMensagemErro('CNPJ é inválido');
      }
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log("name " + name);
    
    setCliente({ ...cliente, [name]: value });
  };

  const salvarCliente = () => {
    var data = {
      cliente: cliente.cliente,
      email: cliente.email,
      telefone: cliente.telefone,
      cnpj: cliente.cnpj,
      cep: cliente.cep,
      endereco: cliente.endereco,
      cidade: cliente.cidade,
    }; 
   
    if (mensagemErro !== '' || cliente.cep === '' ) {
      throw("Mensagem de erro customizada!!!");
    }
    
    ClienteDataService.create(data)
      .then(response => {
        setCliente({
          id: response.data.id,
          cliente: response.data.cliente,
          email: response.data.email,
          telefone: response.data.telefone,
          cnpj: response.data.cnpj,
          cep: response.data.cep,
          endereco: response.data.endereco,
          cidade: response.data.cidade,
          published: response.data.published
        });
        setSubmeter(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

const novoCliente = () => {
    setMensagemErro('CNPJ é inválido');
    setCliente(novoClienteState);
    setSubmeter(false);
  };

  return (
    <div className="submit-form">
      {submeter ? (
        <div>
          <h4>Cliente salvo com sucesso!</h4>
              <br></br>
          <button className="btn btn-success" onClick={novoCliente}>
            Adicionar novo cliente
          </button>
        </div>
      ) : (
      <form className="cadastro-cliente">
        <div>
          <div className="form-group-sm">
            <label htmlFor="cliente">Nome</label>
            <input
              type="text"
              className="form-control"
              id="cliente"
              required
              value={cliente.cliente}
              onChange={handleInputChange}
              name="cliente"
            />
          </div>
        
          <div className="form-group-sm">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required value={cliente.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group-sm">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              className="form-control"
              id="telefone"
              required
              value={cliente.telefone}
              onChange={handleInputChange}
              name="telefone"
            />
          </div>

          <div className="form-group-sm">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="text"
              className="form-control"
              id="cnpj"
              onBlur={validaCNPJ}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              required
              value={cliente.cnpj}
              onChange={handleInputChange}
              name="cnpj"
            />
          </div>          

          <div className="form-group-sm">
            <label htmlFor="cnpj">CEP</label>
            <input
              name="cep"
              className="form-control"
              id="cep"
              required
              value={cliente.cep}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              onChange={handleInputChange}
              onBlur={validaCEP}
              type="text"
            />
          </div>

          <div className="form-group-sm">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              className="form-control"
              id="endereco"
              required
              value={cliente.endereco}
              onChange={handleInputChange}
              name="endereco"
            />
          </div>

          <div className="form-group-sm">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              required
              value={cliente.cidade}
              className="form-control"
              id="cidade"
              onChange={handleInputChange}
              name="cidade"
            />
          </div>

          {(mensagemErro !== '') ? (<div>
                                    <b><p style={{ color: "#FF0000"}}> 
                                    {mensagemErro} 
                                    </p></b>
                                    </div>) : (<div></div>) } 
          
          <button onClick={salvarCliente} className="btn btn-success" id="btn-salvar">
            Salvar
          </button>
        </div>
      </form>
      )}
    </div>
  );
};

export default AddCliente;