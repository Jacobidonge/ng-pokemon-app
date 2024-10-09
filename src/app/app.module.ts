import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
