package com.org.Generation.GeekStation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.Generation.GeekStation.model.UserEntity;
/////REVISARRRR SINO BORRAR

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
