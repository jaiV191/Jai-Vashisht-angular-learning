import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "./shared/models/user";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ContentListItemComponent} from "./player-list-item/content-list-item.component";
import {PlayerService} from "./services/player.service";
import {players} from "./shared/data/mock-content";

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
  players:User[]=[];



  constructor(private playerService: PlayerService) {
  }



  ngOnInit(){
    this.playerService.getPlayers().subscribe({
      next:(data:User[])=>this.players=data,
      error:err=>console.log("Error fetching Students",err),
      complete:()=>console.log("Animal data fetch complete")
    })
  }
}
