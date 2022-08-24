package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CategoryOfItems;
import com.example.demo.model.Items;
import com.example.demo.repository.CategoryOfItemsRepo;
import com.example.demo.repository.ItemsRepo;

@Service
public class CategoryOfItemsService {

	@Autowired
	private CategoryOfItemsRepo categoryrepo;
	
//	Get all Items from the database, findAll returns an iterable and so we use forEach after it
	public List<CategoryOfItems> getAllItems()
	{
		List<CategoryOfItems> all_items = new ArrayList<>();
		
		categoryrepo.findAll().forEach(all_items::add);
		return all_items;
	}
	
//	Get one single item 
	public CategoryOfItems getCat(Long id)
	{
		return categoryrepo.findById(id).orElse(null);
	}
	
//	Save/Insert value in a database
	public CategoryOfItems addItem(CategoryOfItems item)
	{
		return categoryrepo.save(item); 
	}
	
//	Update value in a database item
//	.save method adds if that row is not present in the database and updates it if it is already present
	public CategoryOfItems updateItem(CategoryOfItems item)
	{
		CategoryOfItems existingItem = categoryrepo.findById(item.getCategory_id()).orElse(null);
		existingItem.setCat_name(item.getCat_name());
		existingItem.setCode(item.getCode());
		
		return categoryrepo.save(existingItem);
	}
	
//	Delete a particular item using id
	public String deleteItem(Long id)
	{
		categoryrepo.deleteById(id);
		return "Item deleted with ID -> " + id;
	}
	
	
}
