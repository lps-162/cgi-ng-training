import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Employee } from "../models/employee";

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() : Observable<Employee[]> {
    let empObservable =  this.http.get(this.employeesUrl)
                              .map(res => res.json())
                              .map(employees => employees.map(this.formatEmployee));
    return empObservable;
  }

  getEmployeeDetails(id: number) : Observable<Employee> {
    return this.http.get(this.employeesUrl + '/' + id)
                    .map(res => res.json())
                    .map(this.formatEmployee);
  }

  private formatEmployee(employee) {
    employee.full_name = employee.first_name + ' ' + employee.last_name;
    return employee;
  }
  createEmployee() {

  }
}
