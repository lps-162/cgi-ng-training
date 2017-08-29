import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee = {
    first_name: 'Shivan',
    last_name: 'Sambhan',
    city: 'trivandrum',
    joining_date: new Date()
  };
  activeEmployee;

  actors = ['Rock', 'Dan', 'Johnson'];

  listOfEmployees = [
    {
      first_name: 'Shivan',
      last_name: 'Sambhan',
      city: 'trivandrum',
      joining_date: new Date(),
      cities_travelled: ['Chennai', 'Bangalore']
    },
    {
      first_name: 'Nanda',
      last_name: 'Mahadeva',
      city: 'Cbe',
      joining_date: new Date(),
      cities_travelled: ['Tokyo', '']
    },
    {
      first_name: 'Ishan',
      last_name: 'Sambhu',
      city: 'Chennai',
      joining_date: new Date(),
      cities_travelled: ['Trivandrum', 'Los Angeles']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ifTravelledAtleast2Cities(employee)
  {
    if (employee.cities_travelled.length >= 2) {
      return true;
    }
    return false;
  }

  

  showEmployeeDetails(employee) {
    this.activeEmployee = employee;
  }

}
