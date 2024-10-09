import {provideRouter,Routes} from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import {ContentListComponent} from "./app/player-list/content-list.component";
import {ContentListItemComponent} from "./app/player-list-item/content-list-item.component";

const routes: Routes = [
  { path: '', component: ContentListComponent },
  { path: 'players', component: ContentListItemComponent },

];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
