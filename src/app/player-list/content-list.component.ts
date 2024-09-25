import { Component } from '@angular/core';
import {User} from "../shared/models/user";
import {ContentListItemComponent} from "../player-list-item/content-list-item.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";




@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ NgForOf,NgForOf, JsonPipe, NgIf,ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent{
  players:User[] = [
    { id: 1, firstName: 'Michael', lastName: 'Jordan', team: 'Chicago Bulls', mvp: 5 },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant', team: 'Los Angeles Lakers', mvp: 1 },
    { id: 3, firstName: 'LeBron', lastName: 'James', team: 'Los Angeles Lakers',mvp:4 },
    { id: 4, firstName: 'Larry', lastName: 'Bird', team: 'Boston Celtics',mvp:3 },
    { id: 5, firstName: 'Stephen', lastName: 'Curry', team: 'Golden State Warriors',mvp:2 },
    { id: 6, firstName: 'Tim', lastName: 'Duncan', team: 'San Antonio Spurs',mvp:2 }
  ];
}
