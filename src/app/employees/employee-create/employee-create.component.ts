import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter();
  newEmployee = {
    first_name: '',
    last_name: '',
    city: ''
  };

  name: string = 'shivam';
  
  constructor() { 
    console.log(this.newEmployee);
  }

  ngOnInit() {
  }

  createNewEmployee() {
    this.employeeCreated.emit(this.newEmployee);
    this.newEmployee = {
      first_name: '',
      last_name: '',
      city: ''
    };
  }

}
