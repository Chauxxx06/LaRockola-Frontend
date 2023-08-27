import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { SingUpComponent } from './view/sing-up/sing-up.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'sing-up', component:SingUpComponent},
  {path: 'list-songs',  loadChildren: () => import('./list-songs/list-songs.module').then(m => m.ListSongsModule)},
  {path: 'artist',  loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule)},
  {path: 'songs',  loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule)},
  {path: 'category',  loadChildren: () => import('./categories-songs/categories-songs.module').then(m => m.CategoriesSongsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, SingUpComponent]
