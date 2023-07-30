import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../shared/models/auth.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serverUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  // login(login: string, password: string): Observable<Auth> {
  //   return this.http.post<Auth>(this.serverUrl, { login, password });
  // }

  private authSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>({ auth: false });

  getAuthState(): Observable<Auth> {
    return this.authSubject.asObservable();
  }

  login(username: string, password: string): Observable<Auth>  {
    console.log('Dados enviados para o servidor:', { username, password });
    return this.http.post<any>(`${this.serverUrl}`, { username, password }).pipe(
      map((response) => ({ auth: response.success } as Auth))
    );
  }
  // ------------------------

  // serverUrl = 'http://localhost:3000/login';

//   constructor(private http: HttpClient) {}

//   private authSubject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(new Auth(false));

//   getAuthState(): Observable<Auth> {
//     return this.authSubject.asObservable();
//   }

//   login(username: string, password: string): Observable<Auth>  {
//     console.log('Dados enviados para o servidor:', { username, password });
//     return this.http.post<any>(`${this.serverUrl}`, { username, password }).pipe(
//       map((response) => {
//         if (response.success) {
//           return new Auth(true);
//         } else {
//           return new Auth(false);
//         }
//       })
//     );
//   }
}
