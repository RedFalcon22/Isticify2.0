import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WeeklyscheduleComponent } from '../../dashboard/weeklyschedule/weeklyschedule.component';
import { RightSidebarComponent } from '../../dashboard/right-sidebar/right-sidebar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LessonslistComponent } from '../lessonslist/lessonslist.component';


@Component({
  selector: 'app-lessondashboard',
  imports: [CommonModule, WeeklyscheduleComponent, RightSidebarComponent, SidebarComponent, LessonslistComponent],
  templateUrl: './lessondashboard.component.html',
  styleUrl: './lessondashboard.component.css'
})
export class LessondashboardComponent {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
