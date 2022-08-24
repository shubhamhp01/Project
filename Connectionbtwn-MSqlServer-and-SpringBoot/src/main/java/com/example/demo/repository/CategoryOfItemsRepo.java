package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import com.example.demo.model.CategoryOfItems;


public interface CategoryOfItemsRepo extends JpaRepository<CategoryOfItems,Long>{
	@Procedure(procedureName = "Add_Category_Procedure")
	CategoryOfItems addCategoryProcedure(String cat_name,Long code);
	
	CategoryOfItems findBycode(Long code);
//	void deleteBycode(Long code);
}
