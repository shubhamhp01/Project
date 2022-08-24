package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Userinfo;
import com.example.demo.service.UserinfoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserinfoController {
	
	@Autowired
	private UserinfoService userinfoservice;
	
	@PostMapping("userinfo")
	public Userinfo addItems(@RequestBody Userinfo item)
	{
		return userinfoservice.addUser(item);
	}
	
	@GetMapping("userinfo")
	public List<Userinfo> getallUsers()
	{
//		password = "admin";
		return userinfoservice.allUsers();
	}
	
	@GetMapping("userinfo/{userid}")
	public Userinfo findOneUser(@PathVariable Long userid)
	{
//		password = "admin";
		return userinfoservice.getUser(userid);
	}
	
	@GetMapping("userinfoname/{name}/{password}")
	public Userinfo findOneUserByName(@PathVariable String name, @PathVariable String password)
	{
//		password = "admin";
		return userinfoservice.getUserbyName(name,password);
	}
	
	
	

}
