package com.grt.employeemanagement.contoller;

import com.grt.employeemanagement.entity.Employee_Entity;
import com.grt.employeemanagement.service.Employee_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grtsolutions")
public class Employee_Controller {

    @Autowired
   Employee_Service employeeService;

//    @Autowired
//    public Employee_Controller(Employee_Service employeeService) {
//        this.employeeService = employeeService;
//    }

    @PostMapping("/addemployee")
    public Employee_Entity addEmployee(@RequestBody Employee_Entity employeeEntity){
        return employeeService.addEmployee(employeeEntity);
    }

    @GetMapping("/getAllEmployees")
    public ResponseEntity<List<Employee_Entity>> getAllEmployees(){
        try{
            return ResponseEntity.ok().body(employeeService.getAllEmployees());
        }
        catch (RuntimeException runtimeException){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getEmployee/{id}")
    public ResponseEntity<?> getEmployee(@PathVariable Long id){
        try{
            return ResponseEntity.ok().body(employeeService.getEmployee(id));
        }
        catch (RuntimeException runtimeException){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/employees/{id}") // Corrected endpoint path
    public ResponseEntity<Employee_Entity> editEmployee(@RequestBody Employee_Entity employeeEntity, @PathVariable Long id) {
        try{
            Employee_Entity updatedEmployee = employeeService.editEmployee(employeeEntity, id);
            return ResponseEntity.ok().body(updatedEmployee);
        }
        catch (RuntimeException runtimeException){
            return ResponseEntity.notFound().build();
        }

    }
    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        try{
            employeeService.deleteEmployee(id);
            return ResponseEntity.ok().body("Successfully deleted employee with: " + id);
        }
        catch (RuntimeException runtimeException){
            return ResponseEntity.ok().body("Employee With this id : " + id + " not found");
        }
    }

    @DeleteMapping("/deleteAllEmployees")
    public ResponseEntity<String> deleteAllEmployees(){
        employeeService.deleteAllEmployess();
        return ResponseEntity.ok().body("Deleted all");
    }
}


