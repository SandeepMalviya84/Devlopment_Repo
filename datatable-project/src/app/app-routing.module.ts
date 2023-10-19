import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeTableComponent } from './prime-table/prime-table.component';

const routes: Routes = [{ path: 'prime-table', component: PrimeTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
