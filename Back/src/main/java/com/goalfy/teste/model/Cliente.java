package com.goalfy.teste.model;

import javax.persistence.*;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
    
	@Column(name = "cliente")
	private String cliente;

    @Column(name = "email")
	private String email;

    @Column(name = "telefone")
	private String telefone;

    @Column(name = "cnpj")
	private String cnpj;

    @Column(name = "cep")
	private String cep;

    @Column(name = "endereço")
	private String endereco;

	@Column(name = "cidade")
	private String cidade;

	@Column(name = "published")
	private boolean published;

	public Cliente() {

	}

	public Cliente(String cliente, String email, String telefone, String cnpj,String cep, String endereco, String cidade, boolean published) {
		this.cliente = cliente;
        this.email = email;
        this.telefone = telefone;
        this.cnpj = cnpj;
        this.cep = cep;
        this.endereco = endereco;
		this.cidade = cidade;
		this.published = published;
	}

	public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    @Override
    public String toString() {
        return "Cliente [id=" + id + ", cliente=" + cliente + ", email=" + email + ", telefone=" + telefone + ", cnpj="
                + cnpj + ",  cep=" + cep + ",endereco=" + endereco + ", cidade=" + cidade + ", published=" + published + "]";
    }
    
}