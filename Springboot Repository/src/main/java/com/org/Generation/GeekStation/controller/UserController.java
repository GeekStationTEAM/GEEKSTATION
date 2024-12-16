package com.org.Generation.GeekStation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.org.Generation.GeekStation.model.UserEntity;
import com.org.Generation.GeekStation.service.UserService;

@RestController
@RequestMapping("/api/v1")

public class UserController {
	
	private final UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	//Mapear el metodo getAll()
	
	@GetMapping("/users")
	public List<UserEntity> getUsers(){
		return this.userService.getAll();
	}
	
	//Mapear el metodo createUser() de manera sencilla
	// @RequestBody me permite solicitar el cuerpo (atributos) del Objeto 
	
	@PostMapping("/new-user")
	public UserEntity createUser(@RequestBody UserEntity newUser) {
		return this.userService.createUser(newUser);
	}
	
	
	@DeleteMapping("/delete-user/{id}")
	public void deleteUser(@PathVariable (name = "id")Long id) {
		this.userService.deleteUser(id);
	}

	
	//Mapear el método updateUser 
	@PutMapping("/update-user/{id}")
	public ResponseEntity<?> updateUser(@RequestBody UserEntity user, @PathVariable(name = "id") Long id) {
	try {
	return ResponseEntity.ok(this.userService.updateUser(user, id));
	} catch (UserNotFoundException e) {
	return ResponseEntity.notFound().build();
	}
	}
	
	
	
}
