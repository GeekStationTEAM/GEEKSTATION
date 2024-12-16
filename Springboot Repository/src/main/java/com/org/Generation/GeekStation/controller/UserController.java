package com.org.Generation.GeekStation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.org.Generation.GeekStation.model.UserEntity;
import com.org.Generation.GeekStation.service.UserService;

@RestController
@RequestMapping("/api/v1")

public class UserController {
	
	private final UserService usersService;
	
	@Autowired
	public UserController(UserService userService) {
		this.usersService = userService;
	}
	
	//Mapear el metodo getAll()
	
	@GetMapping("/users")
	public List<UserEntity> getUsers(){
		return this.usersService.getAll();
	}
	
	//Mapear el metodo createUser() de manera sencialla
	// @RequestBody me permite solicitar el cuerpo (atributos) del Objeto 
	
	@PostMapping("/new-user")
	public UserEntity createUser(@RequestBody UserEntity newUser) {
		return this.usersService.createUser(newUser);
	}
	
	
	
	
	

}
