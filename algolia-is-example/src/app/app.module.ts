import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgAisModule } from "angular-instantsearch";

import { AppComponent } from './app.component';
import { SearchHitComponent } from './search-hit/search-hit.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHitComponent,
    HeaderComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    NgAisModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
