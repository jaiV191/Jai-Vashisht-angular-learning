import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {JsonPipe, NgForOf} from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jai-Vashisht-angular-learning';
  name: string = "Jai vashisht";
  favPlayer: string = "Stephen Curry";

  users: User[] = [
    { id: 1, firstName: 'Michael', lastName: 'Jordan', team: 'Chicago Bulls', isAdmin: true },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant', team: 'Los Angeles Lakers' },
    { id: 3, firstName: 'LeBron', lastName: 'James', team: 'Los Angeles Lakers' },
    { id: 4, firstName: 'Larry', lastName: 'Bird', team: 'Boston Celtics', isAdmin: false },
    { id: 5, firstName: 'Stephen', lastName: 'Curry', team: 'Golden State Warriors' },
    { id: 6, firstName: 'Tim', lastName: 'Duncan', team: 'San Antonio Spurs', isAdmin: true }
  ];
}
