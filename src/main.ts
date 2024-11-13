import {provideRouter,Routes} from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import {ContentListComponent} from "./app/player-list/content-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'',redirectTo:'/players',pathMatch:'full'},
  { path: '', component: ContentListComponent },
  { path: 'players', component: ContentListComponent },
  {path:'modify-list-item',component:ModifyListItemComponent},
  {path:'**',component: PageNotFoundComponent}

];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r=>console.log('bootstrap successfull'));
