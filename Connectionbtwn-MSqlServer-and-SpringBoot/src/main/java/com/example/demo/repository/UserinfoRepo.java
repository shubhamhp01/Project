package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.model.Userinfo;

@Repository
public interface UserinfoRepo extends JpaRepository<Userinfo,Long>{
	
	List<Userinfo> findByname(String name);

}
