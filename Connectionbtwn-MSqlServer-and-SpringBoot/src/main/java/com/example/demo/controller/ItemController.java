package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Item_and_Category;
import com.example.demo.model.Items;
import com.example.demo.repository.ItemsRepo;
import com.example.demo.service.ItemsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ItemController {
	@Autowired
	private ItemsService items_service;
	
	@PostMapping("items")
	public Item_and_Category addItems(@RequestBody Item_and_Category item)
	{
		return items_service.addItem(item);
	}
	
	@GetMapping("items")
	public List<Item_and_Category> findAllItem()
	{
		return items_service.getAllItems();
	}
	
//	Since I want to add varaible in path URL so we use PathVariable
	@GetMapping("items/{id}")
	public Items findOneItem(@PathVariable Long id)
	{
		return items_service.getItem(id);
	}
	
	@PutMapping("updateItem")
	public void updateItem(@RequestBody Item_and_Category item)
	{
		System.out.println("-----------------------------------"+item);
		items_service.updateItem(item);
	}
	
	@DeleteMapping("deleteItem/{id}")
	public String delItem(@PathVariable Long id)
	{
		return items_service.deleteItem(id);
	}
	

}
