import { Routes } from '@angular/router';
import { DashboardpageComponent } from './dashboard/dashboardpage/dashboardpage.component';
import { LessondashboardComponent } from './lessonsDashboard/lessondashboard/lessondashboard.component';

export const routes: Routes = [
    {path: 'dashboard', component:DashboardpageComponent},
    {path: 'lessons', component:LessondashboardComponent}
];
