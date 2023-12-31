import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule, MatButtonModule
  ]
})
export class SharedModule { }
