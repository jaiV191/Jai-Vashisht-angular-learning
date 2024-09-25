import { Component } from '@angular/core';
import {User} from "../shared/models/user";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class ContentListComponent {
  players: User[] = [
    { id: 1, firstName: 'Michael', lastName: 'Jordan', team: 'Chicago Bulls', mvp: 5 },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant', team: 'Los Angeles Lakers', mvp: 1 },
    { id: 3, firstName: 'LeBron', lastName: 'James', team: 'Los Angeles Lakers',mvp:4 },
    { id: 4, firstName: 'Larry', lastName: 'Bird', team: 'Boston Celtics',mvp:3 },
    { id: 5, firstName: 'Stephen', lastName: 'Curry', team: 'Golden State Warriors',mvp:2 },
    { id: 6, firstName: 'Tim', lastName: 'Duncan', team: 'San Antonio Spurs',mvp:2 }
  ];
}
