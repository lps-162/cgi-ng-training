import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../../shared/models/employee";
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "../../shared/services/employees.service";
//import { mockEmployees } from '../../shared/mock-data/mock-employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  //@Input() employee: Employee;
  //employeeId: string;
  employee: Employee;

  constructor(private routeInfo: ActivatedRoute,
              private empService: EmployeesService) { }

  ngOnInit() {
    let employeeId = parseInt(this.routeInfo.snapshot.params['id']);
    //this.employee = mockEmployees.find(e => e.id === employeeId);
    this.empService.getEmployeeDetails(employeeId)
        .subscribe(employee => this.employee = employee);

  }

}
