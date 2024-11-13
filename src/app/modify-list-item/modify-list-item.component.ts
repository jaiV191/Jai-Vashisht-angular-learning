import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user";
import {PlayerService} from "../services/player.service";
import {FormBuilder,FormGroup,FormsModule,Validators,ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute,Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {players} from "../shared/data/mock-content";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
    imports: [FormsModule,
      NgIf,
      ReactiveFormsModule
    ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
    playerForm:FormGroup;
    players:User |undefined;
    error:string|null=null

  constructor(private fb: FormBuilder, private playerService: PlayerService, private route: ActivatedRoute, private router:Router) {
      this.playerForm=this.fb.group({
        id:[playerService.getPlayerById],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        team:[''],
        mvp:['']
      })
  }

  ngOnInit(): void {
      const id= Number(this.route.snapshot.paramMap.get('id'));
      if(id){
        this.playerService.getPlayerById(id).subscribe({
          next:players=>{
            if(players){
              this.playerForm.patchValue(players);
            }
          },
          error:err=>{
            this.error='Error fetching players';
            console.error('error fetching players:',err)
          }
        });
      }

  }
  onSubmit() {
      if(this.playerForm.valid){
        const player:User=this.playerForm.value;
        if (player.id){
          this.playerService.updatePlayer(player)
          this.router.navigate(['/players'])
        }else {
          player.id=this.playerService.generateNewId();
         this.playerService.addPlayer(player)
          this.router.navigate(['/players'])
        }
      }
  }
  onDelete():void {
     if (this.playerForm.valid){
       const player:User=this.playerForm.value;
       if (player.id){
         this.playerService.deletePlayer(player)
         this.router.navigate(['/players']);
       }

     }

  }


}
