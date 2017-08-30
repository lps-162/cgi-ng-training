import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from "../../shared/models/employee";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter<Employee>();
  newEmployee: Employee = new Employee();

  name: string = 'shivam';
  
  constructor() { 
    console.log(this.newEmployee);
  }

  ngOnInit() {
  }

  createNewEmployee() {
    this.employeeCreated.emit(this.newEmployee);
    this.newEmployee = new Employee();
  }

}
