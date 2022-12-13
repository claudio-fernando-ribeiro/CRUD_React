package com.goalfy.teste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goalfy.teste.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByPublished(boolean published);
	List<Cliente> findByClienteContaining(String cliente);
}
