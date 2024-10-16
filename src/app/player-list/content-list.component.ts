import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user";
import {ContentListItemComponent} from "../player-list-item/content-list-item.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {PlayerService} from "../services/player.service";
import {RouterLink} from "@angular/router";
import {players} from "../shared/data/mock-content";




@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ NgForOf,NgForOf, JsonPipe, NgIf,ContentListItemComponent,RouterLink],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit{

  playerColumns:string[]=['firstName', 'lastName', 'team', 'mvp'];

  players:User[]=[];

  constructor(private playerService:PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe({
      next:(data: User[])=>this.players=data,
      error:err=>console.error("Error fetching Players",err),
      complete:()=>console.log("Player data fetch complete")
    });



  }
  selectedPlayer?: User;
  selectPlayer(player:User):void{
    this.selectedPlayer=player;
  }
}
