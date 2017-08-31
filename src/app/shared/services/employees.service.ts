import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//import { Observable } from "rxjs/Observable";
import { Employee } from "../models/employee";
import {Observable} from 'rxjs/Rx';
@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() : Observable<Employee[]> {
    let empObservable =  this.http.get(this.employeesUrl)
                              .map(res => res.json())
                              .map(employees => employees.map(this.formatEmployee))
                              .catch(this.handleError);
                      
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

  private handleError(err) {
    const errMessage = err.json().error.message;
    return Observable.throw(errMessage);
  }
  
  createEmployee(employee: Employee) {
    return this.http.post(this.employeesUrl, employee)
            .map(response => response.json())
            .catch(this.handleError);
  }
}
