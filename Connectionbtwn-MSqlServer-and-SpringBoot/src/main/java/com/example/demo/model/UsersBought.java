package com.example.demo.model;

public class UsersBought {
	private int bought_id;
	private String user_id;
	private int code;
	private int purchased_qty;
	private int total_amt;

	public int getBought_id() {
		return bought_id;
	}

	public void setBought_id(int bought_id) {
		this.bought_id = bought_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public int getPurchased_qty() {
		return purchased_qty;
	}

	public void setPurchased_qty(int purchased_qty) {
		this.purchased_qty = purchased_qty;
	}

	public int getTotal_amt() {
		return total_amt;
	}

	public void setTotal_amt(int total_amt) {
		this.total_amt = total_amt;
	}

}
