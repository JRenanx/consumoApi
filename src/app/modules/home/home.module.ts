import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpTableComponent } from './components/cp-table/cp-table.component';
import { CpFormComponent } from './components/cp-form/cp-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    CpTableComponent,
    CpFormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
