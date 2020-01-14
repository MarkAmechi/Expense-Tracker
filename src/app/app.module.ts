import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseCardComponent } from './expense-card/expense-card.component';
import { ExpenseInsertComponent } from './expense-insert/expense-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseCardComponent,
    ExpenseInsertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
