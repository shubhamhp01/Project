package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Items;

@Repository
public interface ItemsRepo extends JpaRepository<Items,Long>{
//	We want to create Get, Insert, Update, Delete methods 
//	getAllItems()
//	getItems()
//	updateItems()
//	deleteItems()
	
//	Spring data JPA will provide a class and does the implementation for us 
	Items findByname(String name);
}
