package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.StoredProcedureParameter;

@Entity
@NamedStoredProcedureQuery(name = "addCategoryProcedure", procedureName= "Add_Category_Procedure",
parameters = { @StoredProcedureParameter( name = "cat_name", type = String.class),
	    @StoredProcedureParameter( name = "code", type = Integer.class)}
	)
public class CategoryOfItems {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long category_id;
	
	private String cat_name;
	private Long code;

	@Override
	public String toString() {
		return "CategoryOfItems [category_id=" + category_id + ", cat_name=" + cat_name + ", code=" + code + "]";
	}

	public Long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}

	public String getCat_name() {
		return cat_name;
	}

	public void setCat_name(String cat_name) {
		this.cat_name = cat_name;
	}

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}
}
