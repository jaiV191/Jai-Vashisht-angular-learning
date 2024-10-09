import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "./shared/models/user";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ContentListItemComponent} from "./player-list-item/content-list-item.component";
import {PlayerService} from "./services/player.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, NgIf, ContentListItemComponent, RouterLink, RouterLinkActive],
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
    { id: 1, firstName: 'Michael', lastName: 'Jordan', team: 'Chicago Bulls', mvp: 5,img:"https://www.google.com/imgres?q=tim%20duncan&imgurl=https%3A%2F%2Fcdn.nba.com%2Fheadshots%2Fnba%2Flatest%2F1040x760%2F1495.png&imgrefurl=https%3A%2F%2Fwww.nba.com%2Fplayer%2F1495%2Ftim-duncan&docid=wa5S8YCI6nb4oM&tbnid=KXUja8egiL1EAM&vet=12ahUKEwih9szvi4KJAxXqC3kGHWhAMicQM3oECGgQAA..i&w=1040&h=760&hcb=2&ved=2ahUKEwih9szvi4KJAxXqC3kGHWhAMicQM3oECGgQAA" },
    { id: 2, firstName: 'Kobe', lastName: 'Bryant', team: 'Los Angeles Lakers', mvp: 1 ,img:""},
    { id: 3, firstName: 'LeBron', lastName: 'James', team: 'Los Angeles Lakers',mvp:4 ,img:""},
    { id: 4, firstName: 'Larry', lastName: 'Bird', team: 'Boston Celtics',mvp:3,img:"" },
    { id: 5, firstName: 'Stephen', lastName: 'Curry', team: 'Golden State Warriors',mvp:2, img:"" },
    { id: 6, firstName: 'Tim', lastName: 'Duncan', team: 'San Antonio Spurs',mvp:2, img:"" }
  ];

  ngOnInit(){
    this.playerService.getPlayerById(5).subscribe({
      next:(data:User|undefined)=>this.gswplayer=data,
      error:err=>console.error("Error Fetching Players By Id",err),
      complete:()=>console.log("Player data fetch complete")
    });
  }
}
