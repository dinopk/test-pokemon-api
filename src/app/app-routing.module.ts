import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokesComponent } from './components/list-pokes/list-pokes.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

const routes: Routes = [
  {
    path:'',
    component: ListPokesComponent
  },
  {
    path: 'details/:id',
    component: PokeDetailsComponent
  },
  {
    path: '**',
    component: ListPokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
