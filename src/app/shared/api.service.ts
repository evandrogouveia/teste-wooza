import { PlataformaModel } from './model';
import { PlanoModel } from './model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  sharingObject: any;

  apiUrl = 'http://private-59658d-celulardireto2017.apiary-mock.com';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPlataformas(): Observable<PlataformaModel> {
    return this.http.get<PlataformaModel>(this.apiUrl + '/plataformas')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getPlanos(sku): Observable<PlanoModel> {
    return this.http.get<PlanoModel>(this.apiUrl + '/planos/' + sku)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  set sharedValue(obj) {
    this.sharingObject = obj;
  }

  get sharedValue() {
    return this.sharingObject;
  }

}
