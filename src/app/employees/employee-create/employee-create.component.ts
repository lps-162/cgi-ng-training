import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from "../../shared/models/employee";
import { EmployeesService } from "../../shared/services/employees.service";
import { Router } from "@angular/router";
import { AlertService } from "../../shared/services/alert.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter<Employee>();
  newEmployee: Employee = new Employee();
  errorMessage: string;

  name: string = 'shivam';
  
  constructor(private empService: EmployeesService,
              private router: Router,
              private alertService: AlertService) { 
    console.log(this.newEmployee);
  }

  ngOnInit() {
  }

  createNewEmployee() {
    //this.employeeCreated.emit(this.newEmployee);
    this.empService.createEmployee(this.newEmployee)
            .subscribe(employee => {
                        console.log(employee);
                        this.alertService.sendMessage('Employee Created Successfully');
                        this.router.navigate(['/employees', employee.id]);
                       }, 
                      err => {
                        this.errorMessage = err;
                      });

    this.newEmployee = new Employee();
  }

}
