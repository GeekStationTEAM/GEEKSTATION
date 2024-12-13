package com.org.Generation.GeekStation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.org.Generation.GeekStation.model.UserEntity;
import com.org.Generation.GeekStation.repository.UserRepository;


@Service
public class UserService {
	
private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository userRepository ) {
		this.userRepository =userRepository;
	}
	
	//metodo para obtener a todos los User
	public List<UserEntity> getAll(){
		return this.userRepository.findAll();
	}
	
	//metodo para crear un nuevo usuario
	public UserEntity createUser(UserEntity newUser) {
		return this.userRepository.save(newUser);
	}
	
	//METODO PARA BORRAR USUARIO
	public void deleteUser(Long id) {
		this.userRepository.deleteById(id);
	}

	//METODO PARA INSERTAR USUARIO
	public UserEntity updateUser (UserEntity user, Long id) {
		return this.userRepository.findById (id)
				.map(userField -> {
					userField.setUsername(user.getUsername());
					return this.userRepository.save(userField);
					
				})
		.orElseThrow(()-> new UserNotFoundException (id));
		
	}
	
}
