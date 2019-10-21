import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './app/error/page-not-found.component';

const myRoutes: Routes = [                                                                    
                        { path: '', redirectTo: 'pokemons/all', pathMatch: 'full' },
                        { path: '**', component:PageNotFoundComponent },                        
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
