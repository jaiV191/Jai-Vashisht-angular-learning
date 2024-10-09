import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ContentListItemComponent} from "./player-list-item/content-list-item.component";
import {PlayerService} from "./services/player.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, NgIf, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jai-Vashisht-angular-learning';
  name: string = "Jai vashisht";
  favPlayer: string = "Stephen Curry";

  gswplayer?:User;

  constructor(private playerService: PlayerService) {
  }

  users: User[] = [
    { id: 1, firstName: 'Michael', lastName: 'Jordan', team: 'Chicago Bulls', mvp: 5 },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant', team: 'Los Angeles Lakers', mvp: 1 },
    { id: 3, firstName: 'LeBron', lastName: 'James', team: 'Los Angeles Lakers',mvp:4 },
    { id: 4, firstName: 'Larry', lastName: 'Bird', team: 'Boston Celtics',mvp:3 },
    { id: 5, firstName: 'Stephen', lastName: 'Curry', team: 'Golden State Warriors',mvp:2 },
    { id: 6, firstName: 'Tim', lastName: 'Duncan', team: 'San Antonio Spurs',mvp:2 }
  ];

  ngOnInit(){
    this.playerService.getPlayerById(5).subscribe({
      next:(data:User|undefined)=>this.gswplayer=data,
      error:err=>console.error("Error Fetching Players By Id",err),
      complete:()=>console.log("Player data fetch complete")
    });
  }
}
