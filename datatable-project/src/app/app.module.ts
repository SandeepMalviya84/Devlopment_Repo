import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { PrimeTableComponent } from './prime-table/prime-table.component';
import { CalenderComponent } from './calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
   FilterPipe,
   PrimeTableComponent,
   CalenderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RouterLinkActive,
    ReactiveFormsModule,
 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
