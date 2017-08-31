import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    let empObservable =  this.http.get(this.employeesUrl)
                              .map(res => res.json());
    return empObservable;
  }

  getEmployeeDetails(id: number) {
    return this.http.get(this.employeesUrl + '/' + id)
                    .map(res => res.json());
  }

  createEmployee() {

  }
}
