import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { Carro } from 'src/app/shared/models/carro.model';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent{

  // carros?: Carro[];

  // constructor(private service: CarroService) {}

  // ngOnInit() {
  //   this.buscarCarro();
  // }
  
  // buscarCarro(value: string = ''){
  //   return this.service.getCarros()
  //   .subscribe(carros => {this.carros = carros});
  // }
  // reservarCarro(){
  //   console.log("reservado");
    
  // }
  

}
