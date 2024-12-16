package com.org.Generation.GeekStation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.org.Generation.GeekStation.model.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
