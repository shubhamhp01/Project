package com.example.demo.model;

public class Item_and_Category {
	private Long code;

	private String prod_name;
	private String description;
	private int price;
	private int quantity_available;
	private String image_path;
	private int reviews;

//	private Long category_id;
	private String cat_name;
	
	public Item_and_Category()
	{
		
	}
	
	public Item_and_Category(Long code, String prod_name, String description, int price, int quantity_available,
			String image_path, int reviews, String cat_name) {
		super();
		this.code = code;
		this.prod_name = prod_name;
		this.description = description;
		this.price = price;
		this.quantity_available = quantity_available;
		this.image_path = image_path;
		this.reviews = reviews;
		this.cat_name = cat_name;
	}

	

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public String getProd_name() {
		return prod_name;
	}

	public void setProd_name(String prod_name) {
		this.prod_name = prod_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity_available() {
		return quantity_available;
	}

	public void setQuantity_available(int quantity_available) {
		this.quantity_available = quantity_available;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

	public int getReviews() {
		return reviews;
	}

	public void setReviews(int reviews) {
		this.reviews = reviews;
	}


	public String getCat_name() {
		return cat_name;
	}

	public void setCat_name(String cat_name) {
		this.cat_name = cat_name;
	}

	
}
