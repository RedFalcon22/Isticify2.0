import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lessonslist',
  templateUrl: './lessonslist.component.html',
  imports:[CommonModule],
  styleUrls: ['./lessonslist.component.css'],
})
export class LessonslistComponent {
  subjects = [
    { name: 'Sys.Expl', color: '#ffe7ba', txtcolor: '#d78d03' },
    { name: 'Security', color: '#e9efff', txtcolor: '#5272e9' },
    { name: 'AI', color: '#ffbabe', txtcolor: '#ff5078' },
    { name: 'Web.Dev', color: '#ffc9be', txtcolor: '#ff6500' }
  ];
}
