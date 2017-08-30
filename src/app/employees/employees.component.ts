import { Component, OnInit } from '@angular/core';
import { mockEmployees } from '../shared/mock-data/mock-employees';
import { Employee } from "../shared/models/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  activeEmployee: Employee;
  listOfEmployees: Employee[] = mockEmployees;
  constructor() { }

  ngOnInit() {
  }

  ifTravelledAtleast2Cities(employee: Employee)
  {
    // if (employee.length >= 2) {
    //   return true;
    // }
    return false;
  }

  showEmployeeDetails(employee: Employee) {
    this.activeEmployee = employee;
  }

  handleEmployeeCreation(employee: Employee) {
    console.log(employee);
    this.listOfEmployees.push(employee);
  }

}