package com.grt.employeemanagement.repository;

import com.grt.employeemanagement.entity.Employee_Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employee_Repository extends JpaRepository<Employee_Entity,Long> {
}
