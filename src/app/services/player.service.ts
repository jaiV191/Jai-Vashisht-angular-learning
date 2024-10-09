import { Injectable } from '@angular/core';
import {players} from "../shared/data/mock-content";
import{Observable,of} from "rxjs";
import {User} from "../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
private player:User[]=players;
  constructor() { }
  getPlayers():Observable<User[]>{
    return of(players);
  }
    getPlayerById(id:number):Observable<User | undefined>{
    const player=this.player.find(player=>player.id===id);
    return of(player);
    }
    addPlayer(newPlayer:User):Observable<User[]>{
    this.player.push(newPlayer);
    return of(this.player);
    }
    updatePlayer(updatedPlayer:User): Observable<User[]>{
    const index =this.player.findIndex(player=>player.id===updatedPlayer.id);
    if(index !==-1){
      this.player[index]=updatedPlayer;
    }
    return of(this.player);
    }
    deletePlayer(id:number):Observable<User[]>{
    this.player=this.player.filter(player=>player.id===id);
      return of(this.player);
    }
}
