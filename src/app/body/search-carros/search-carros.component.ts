import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CarroService } from '../carro.service';
import { Carro } from 'src/app/shared/models/carro.model';
import { FormControl, Validators } from '@angular/forms';
import { Subject, take, debounceTime, filter, distinctUntilChanged, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReserveComponent } from '../reserve/reserve.component';




@Component({
  selector: 'app-search-carros',
  templateUrl: './search-carros.component.html',
  styleUrls: ['./search-carros.component.scss']
})
export class SearchCarrosComponent implements OnInit{

  carros: Carro[] = [];
  carro: Carro;
  
  
  searchControl = new FormControl('', Validators.minLength(3));
 
  constructor(private service: CarroService, 
    // private reserveComponent: ReserveComponent
    )
     {}

 
  // chamarFuncaoNoComponenteB(searchValue: Carro) {
  //   this.reserveComponent.adicionarCarro(searchValue);
  // }

  ngOnInit() {
    this.getCarros();
    this.searchControl.valueChanges
    .pipe(debounceTime(1000), take(1))
      .subscribe((value) => {
        this.searchControl.markAsTouched();
      });      
  }
 
  getCarros(value: string = '') {
      this.service.searchCarros(value).pipe(take(1)).subscribe(carros => {
        this.carros = carros;
        this.sortCarros();
      });
    
  }
  sortCarros(order: 'asc' | 'desc' = 'asc') {
    const reservados = this.carros.filter(carro => !carro.disponivel);
    const disponiveis = this.carros.filter(carro => carro.disponivel);
    disponiveis.sort((a, b) => {
      if (order === 'asc') {
        return a.km - b.km; 
      } else {
        return b.km - a.km; 
      }
    });
    this.carros = [...disponiveis, ...reservados];
  }
 
  sortByKM(order: 'asc' | 'desc') {
    this.service.searchCarros(undefined, undefined, 'km', order).pipe(take(1)).subscribe(carros => {
      this.carros = carros;
      this.sortCarros(order);
    });
  }

  sortByValor(order: 'asc' | 'desc') {
    this.service.searchCarros(undefined, undefined, 'valor', order).pipe(take(1)).subscribe(carros => {
      this.carros = carros;
      const disponiveis = this.carros.filter(carro => carro.disponivel);
      disponiveis.sort((a, b) => (order === 'asc' ? a.valor - b.valor : b.valor - a.valor));
      this.carros = [...disponiveis, ...this.carros.filter(carro => !carro.disponivel)];
    });
  }

  sortByValorDecrescente() {
    this.service.searchCarros(undefined, undefined, 'valor', 'desc').pipe(take(1)).subscribe(carros => {
      this.carros = carros;
      const disponiveis = this.carros.filter(carro => carro.disponivel);
      disponiveis.sort((a, b) => b.valor - a.valor);
      this.carros = [...disponiveis, ...this.carros.filter(carro => !carro.disponivel)];   
     });
  }



}
