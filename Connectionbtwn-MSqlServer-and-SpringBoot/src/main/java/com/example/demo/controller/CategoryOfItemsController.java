package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CategoryOfItems;
import com.example.demo.model.Items;
import com.example.demo.service.CategoryOfItemsService;
import com.example.demo.service.ItemsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryOfItemsController {
	@Autowired
	private CategoryOfItemsService category_service;

	@PostMapping("itemsCat")
	public CategoryOfItems addItems(@RequestBody CategoryOfItems item)
	{
		return category_service.addItem(item);
	}
	
	@GetMapping("itemsCat")
	public List<CategoryOfItems> findAllItem()
	{
		return category_service.getAllItems();
	}
	
	@GetMapping("itemsCat/{id}")
	public CategoryOfItems findOneItem(@PathVariable Long id)
	{
		return category_service.getCat(id);
	}
	
	@PutMapping("updateItemCat")
	public CategoryOfItems updateItem(@RequestBody CategoryOfItems item)
	{
		return category_service.updateItem(item);
	}
	
	@DeleteMapping("deleteItemCat/{id}")
	public String delItem(@PathVariable Long id)
	{
		return category_service.deleteItem(id);
	}

}
