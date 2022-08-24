package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.model.Userinfo;
import com.example.demo.repository.UserinfoRepo;

@Service
public class UserinfoService {
	
	@Autowired
	private UserinfoRepo userinforepo;
	
//	Get all Users
	public List<Userinfo> allUsers()
	{
		List<Userinfo> userinfoList = new ArrayList<>();
		userinforepo.findAll().forEach(userinfoList::add);
		return userinfoList;
	}
	
//	Get one User if he exists
	public Userinfo getUser(Long userid)
	{	
		
//		if (dataFromDatabase.getPassword() == password)
//		{
//			return userinforepo.findById(userid).orElse(null);
//		}
//		return null;
//		
		return userinforepo.findById(userid).orElse(null);		
	}
	
	public Userinfo getUserbyName(String name,String password)
	{	

		List<Userinfo> dataFromDatabase = userinforepo.findByname(name);
		
//		System.out.println(dataFromDatabase+" "+ password);
		
//		dataFromDatabase.forEach(val => {val.});
		for(Userinfo val:dataFromDatabase)
		{
//			System.out.println("INside lOOP"+val+val.getPassword());
			
			if(val.getPassword().equals(password.strip()))
			{
//				System.out.println("HELLOOOOOOOOOOOO");
				return val;
			}
		}
		return null;
		
//		return userinforepo.findByname(name);		
	}
	
	public Userinfo addUser(Userinfo userDetails)
	{
		return userinforepo.save(userDetails);
	}
	
	
}
