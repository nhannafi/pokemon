import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { PokemonsModule }  from './app/pokemons/pokemons.module';
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent} from './app/error/page-not-found.component';
import { FormsModule} from "@angular/forms";
import {LoginComponent} from "./app/login.component";
import { LoginRoutingModule } from "./app/login-routing.module";

import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from  './app/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false } ),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
