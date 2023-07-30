import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carro } from '../shared/models/carro.model';


@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private apiUrl = 'http://localhost:3000/carros'; 

  private carrosReservadosSubject: BehaviorSubject<Carro[]> = new BehaviorSubject<Carro[]>([]);
  private carrosReservados: Carro[] = [];
  private ultimoCarroReservado: Carro | null = null;

  constructor(private http: HttpClient) {
    this.carrosReservadosSubject.next(this.carrosReservados);
  }

  searchCarros(modelo?: string, marca?: string, sort?: string, order?: 'asc' | 'desc'): Observable<Carro[]> {
    let httpParams = new HttpParams();

    if (modelo) {
      httpParams = httpParams.append('modelo', modelo);
    }

    if (marca) {
      httpParams = httpParams.append('marca', marca);
    }

    if (sort && (sort === 'km' || sort === 'valor')) {
      httpParams = httpParams.append('_sort', sort);
    }

    if (order && (order === 'asc' || order === 'desc')) {
      httpParams = httpParams.append('_order', order);
    }    
    return this.http.get<Carro[]>(this.apiUrl, { params: httpParams });
  }

  // reservarCarro(carroId: number): Observable<Carro> {
  //   return this.http.post<Carro>(`${this.apiUrl}/${carroId}`, {});
  // }
  
  addCarroReservado(carro: Carro): void {
    this.carrosReservados.push(carro);
    this.ultimoCarroReservado = carro;
    this.carrosReservadosSubject.next(this.carrosReservados);
  
  }

  getCarrosReservados(): Observable<Carro[]> {
    return this.carrosReservadosSubject.asObservable();
  }

  getUltimoCarroReservado(): Carro | null {
    return this.ultimoCarroReservado;
  }
}

