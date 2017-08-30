import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { EmployeesComponent } from "./employees/employees.component";

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
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);