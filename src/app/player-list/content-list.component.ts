import { Component } from '@angular/core';
import {User} from "../shared/models/user";
import {ContentListItemComponent} from "../player-list-item/content-list-item.component";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {players} from "../shared/data/mock-content";



@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ NgForOf,NgForOf, JsonPipe, NgIf,ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent{
  player:User[]=players;
}
