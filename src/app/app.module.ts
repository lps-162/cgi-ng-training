import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from "./about/about.component";
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    AboutComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
