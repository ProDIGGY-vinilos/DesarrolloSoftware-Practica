import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar el modulo para hacer peticiones http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameListComponent } from './components/name-list/name-list.component';

@NgModule({
  declarations: [AppComponent, NameListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
