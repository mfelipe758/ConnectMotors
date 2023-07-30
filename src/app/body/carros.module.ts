import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCarrosComponent } from './search-carros/search-carros.component';
import { CarrosRoutingModule } from './carros-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarroComponent } from './carro/carro.component';
import { ReserveComponent } from './reserve/reserve.component';





@NgModule({
  declarations: [
    SearchCarrosComponent,
    CarroComponent,
    ReserveComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  exports: [
  ]
})
export class CarrosModule { }
