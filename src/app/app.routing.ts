import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { EmployeesComponent } from "./employees/employees.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EmployeeDetailsComponent } from "./employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "./employees/employee-create/employee-create.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employees/create',
        component: EmployeeCreateComponent
    },
    {
        path: 'employees/:id',
        component: EmployeeDetailsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);