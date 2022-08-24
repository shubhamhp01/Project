package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//JPA should know that this is an Entity so JPA CAN CREATE A table called items which will have columns
@Entity
public class Items {
	
//	Tell JPA that code is the primary key
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long code;
	
	@Column(name = "prod_name")
	private String name;
	private String description;
	private int price;
	private int quantity_available;
	private String image_path;
	private int reviews;
	
	public Items() {
		
	}

	public Items(Long code, String name, String description, int price, int quantity_available, String image_path,
			int reviews) {
		super();
		this.code = code;
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity_available = quantity_available;
		this.image_path = image_path;
		this.reviews = reviews;
	}

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public String getProd_name() {
		return name;
	}

	public void setProd_name(String name) {
		this.name = name;
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

	public int getReviews() {
		return reviews;
	}

	public void setReviews(int reviews) {
		this.reviews = reviews;
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

	@Override
	public String toString() {
		return "Items [code=" + code + ", prod_name=" + name + ", description=" + description + ", price=" + price
				+ ", quantity_available=" + quantity_available + ", image_path=" + image_path + ", reviews=" + reviews
				+ "]";
	}

	

}
