package com.example.demo.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CategoryOfItems;
import com.example.demo.model.Item_and_Category;
import com.example.demo.model.Items;
import com.example.demo.repository.CategoryOfItemsRepo;
import com.example.demo.repository.ItemsRepo;

@Service
public class ItemsService {
	
//	Inject instance of ItemsRepository to it	
	@Autowired
	private ItemsRepo itemsrepo;
	@Autowired
	private CategoryOfItemsRepo categoryrepo;
	
//	Map<String,ArrayList<Integer>> cat_map_item; 
	
//	Get all Items from the database, findAll returns an iterable and so we use forEach after it
	public List<Item_and_Category> getAllItems()
	{
		List<Items> all_items = new ArrayList<>();
		List<CategoryOfItems> cat_of_items = new ArrayList<>();
		
		List<Item_and_Category> item_with_cat = new ArrayList<>();

//		Get code of all items in Items table
		itemsrepo.findAll().forEach(all_items::add);
//		Stream<Items> stream = all_items.stream();
		
//		Put hashMap for CategoryName and Item code
		categoryrepo.findAll().forEach(cat_of_items::add);
		
		for(Items item: all_items)
		{
			
			Item_and_Category inside_loop_obj;
			inside_loop_obj = new Item_and_Category();
			
			inside_loop_obj.setCode(item.getCode());
			inside_loop_obj.setProd_name(item.getProd_name());
			inside_loop_obj.setDescription(item.getDescription());
			inside_loop_obj.setImage_path(item.getImage_path());
			inside_loop_obj.setPrice(item.getPrice());
			inside_loop_obj.setQuantity_available(item.getQuantity_available());
			inside_loop_obj.setReviews(item.getReviews());
			
			cat_of_items.forEach(i -> {
				if(i.getCode()==item.getCode()) 
				{
					inside_loop_obj.setCat_name(i.getCat_name());
				}
				});
	
			item_with_cat.add(inside_loop_obj);
		}
		
		return item_with_cat;
	}
	
//	Get one single item 
	public Items getItem(Long id)
	{

		return itemsrepo.findById(id).orElse(null);
	}
	
//	Save/Insert value in a database
	public Item_and_Category addItem(Item_and_Category item)
	{

		Items items_obj = new Items();

		items_obj.setDescription(item.getDescription());
		items_obj.setImage_path(item.getDescription());
		items_obj.setPrice(item.getPrice());
		items_obj.setProd_name(item.getProd_name());
		items_obj.setQuantity_available(item.getQuantity_available());
		items_obj.setReviews(item.getReviews());
		
		itemsrepo.save(items_obj);

		Items items_obj_new = new Items();
		items_obj_new = itemsrepo.findByname(item.getProd_name());
		System.out.println(items_obj_new);
		
		CategoryOfItems catItems = new CategoryOfItems();
		catItems.setCat_name(item.getCat_name());
		catItems.setCode(items_obj_new.getCode());
		
		categoryrepo.save(catItems);
		
//		categoryrepo.addCategoryProcedure(item.getCat_name(), items_obj_new.getCode());
		
		return item;
	}
	
//	Update value in a database item
//	.save method adds if that row is not present in the database and updates it if it is already present
	public void updateItem(Item_and_Category item)
	{
		Items existingItem = itemsrepo.findById(item.getCode()).orElse(null);
		CategoryOfItems existingCat = categoryrepo.findBycode(item.getCode());
		System.out.println("-----------EXISTING ITEM =>>> "+existingItem);
		
		System.out.println("HELLOOOOO"+existingCat);
		
		existingItem.setProd_name(item.getProd_name());
		existingItem.setDescription(item.getDescription());
		existingItem.setPrice(item.getPrice());
		existingItem.setImage_path(item.getDescription());
		existingItem.setQuantity_available(item.getQuantity_available());
		existingItem.setReviews(item.getReviews());
		
		System.out.println("-----------EXISTING ITEM AFTER UPDATION =>>> "+existingItem);
		existingCat.setCat_name(item.getCat_name());
//		existingCat.setCode(null);
		itemsrepo.save(existingItem);
		categoryrepo.save(existingCat);
		
	}
	
//	Delete a particular item using id
	public String deleteItem(Long id)
	{
		CategoryOfItems existingCat = categoryrepo.findBycode(id);
		categoryrepo.deleteById(existingCat.getCategory_id());
		
		itemsrepo.deleteById(id);

		return "Item deleted with ID -> " + id;
	}
	
//	public void deleteCat(Long cat_id)
//	{
//		categoryrepo.deleteById(cat_id);
//	}
}
