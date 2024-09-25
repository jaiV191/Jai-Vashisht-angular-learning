import {Component, Input} from '@angular/core';
import {User} from "../shared/models/user";

@Component({
  selector: 'app-player-list-item',
  standalone: true,
  imports: [],
  templateUrl: './player-list-item.component.html',
  styleUrl: './player-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() player?:User;
}
