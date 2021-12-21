import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment'
import { ErrorMessageHandler } from 'src/app/helpers/error-handler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient, 
    private errorHandler: ErrorMessageHandler,
  ) { }

  get headers() {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Access-Control-Allow-Origin': '*',
      })
  }

  getBaseUrl() {
    return `${environment.api_base_url}`;
  }


  private handleError(error: HttpErrorResponse, handler: ErrorMessageHandler) {
    console.log(error)
    if (error.error instanceof ProgressEvent) {
      handler.showErrorMessage("Couldn't connect to remote server.");
    } else if (error.error.message) {
      handler.showErrorMessage(error.error.message)
      return throwError(
        error.error.message
      );
    }
    //handler.showErrorMessage('Could not connect to remote server.')
    return throwError(
      'Could not connect to remote server.'
    );
  }

  get(path: string): Observable<any> {
    return this.http
      .get<any>(this.getBaseUrl() + `${path}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }

  
  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post<any>(this.getBaseUrl() + `${path}`, JSON.stringify(body), { headers: this.headers })

  }

}
