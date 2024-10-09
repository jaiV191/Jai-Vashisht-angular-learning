import { Injectable } from '@angular/core';
import {players} from "../shared/data/mock-content";
import{Observable,of} from "rxjs";
import {User} from "../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  getPlayers():Observable<User[]>{
    return of(players);
  }
}
