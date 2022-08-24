package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Userinfo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userid;
	
	@Column(name = "name_user")
	private String name;
	
	private String email_id;
	private Long phone_no;
	private String password;

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public String getName_user() {
		return name;
	}

	public void setName_user(String name) {
		this.name = name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public Long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(Long phone_no) {
		this.phone_no = phone_no;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Userinfo() {
		
	}
	
	public Userinfo(Long userid, String name, String email_id, Long phone_no, String password) {
		super();
		this.userid = userid;
		this.name = name;
		this.email_id = email_id;
		this.phone_no = phone_no;
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserInfo [userid=" + userid + ", name =" + name + ", email_id=" + email_id + ", phone_no="
				+ phone_no + ", password=" + password + "]";
	}

}
