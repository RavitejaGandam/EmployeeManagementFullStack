package com.grt.employeemanagement.service;

import com.grt.employeemanagement.entity.Employee_Entity;
import com.grt.employeemanagement.repository.Employee_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Employee_Service {



    @Autowired
   Employee_Repository employeeRepository;

//   @Autowired
//    public Employee_Service(Employee_Repository employeeRepository) {
//        this.employeeRepository = employeeRepository;
//    }

    public Employee_Entity addEmployee(Employee_Entity employeeEntity){
        Employee_Entity employeeEntity1 = employeeRepository.save(employeeEntity);
        return employeeEntity1;
    }

    public List<Employee_Entity> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee_Entity getEmployee(Long id){
        return employeeRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Employee with this " +id + "not found"));
    }

    public Employee_Entity editEmployee(Employee_Entity employeeEntity,Long id){
        Employee_Entity employeeEntity1 = employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Employee with this " +id +"not found"));
        employeeEntity1.setName(employeeEntity.getName());
        employeeEntity1.setUserName(employeeEntity.getUserName());
        employeeEntity1.setEmail(employeeEntity.getEmail());
        return employeeRepository.save(employeeEntity1);
    }

    public String deleteEmployee(Long id){
        if(employeeRepository.existsById(id)){
            Employee_Entity employeeEntity = employeeRepository.findById(id).get();
            employeeRepository.deleteById(id);
            return "Successfully deleted employee with :" + id;
        }
       else {
           throw new RuntimeException("Opps! Employee with this " +id+" not found");
        }
    }

    public String deleteAllEmployess(){
        employeeRepository.deleteAll();
        return "Deleted All Employees Sucessfully";
    }
}
