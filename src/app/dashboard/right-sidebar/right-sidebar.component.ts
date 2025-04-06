import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  imports: [CommonModule, CalendarComponent],
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  events = [
    {
      profile: 'assets/profiles/user1.jpg',
      topic: 'Réunion parents-professeurs',
    },
    {
      profile: 'assets/profiles/user2.jpg',
      topic: 'Sortie pédagogique à Carthage',
    },
    {
      profile: 'assets/profiles/user3.jpg',
      topic: 'Conseil de classe terminale',
    },
    {
      profile: 'assets/profiles/user4.jpg',
      topic: 'Événement sportif inter-écoles',
    },
    {
      profile: 'assets/profiles/user5.jpg',
      topic: 'Journée portes ouvertes',
    },
  ];


  isResizing = false;
  sidebarWidth = 350; // Initial sidebar width

  onResizeStart(event: MouseEvent) {
    this.isResizing = true;
    const initialMouseX = event.clientX;
    const initialWidth = this.sidebarWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (this.isResizing) {
        const newWidth = initialWidth + (moveEvent.clientX - initialMouseX);
        this.sidebarWidth = Math.max(150, newWidth); // Prevent sidebar from becoming too small
        // Update the right-sidebar width dynamically
        const rightSidebar = document.querySelector('app-right-sidebar') as HTMLElement;
        rightSidebar.style.width = `${this.sidebarWidth}px`;
      }
    };

    const onMouseUp = () => {
      this.isResizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
