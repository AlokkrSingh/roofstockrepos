import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RoofPost } from '../models/roofpost';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RoofStockService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',      
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/RoofPosts/';
   }

   getRoofPosts(): Observable<any> {
    return this.http.get('https://samplerspubcontent.blob.core.windows.net/public/properties.json')
    .pipe(
      map(this.extractData),
      catchError(this.errorHandler)
    );
  }

  private extractData(res: Response) {
    console.log(res);
    return res || {}; // If 'res' is null, it returns empty object
  }

  getRoofPost(Id: number): Observable<RoofPost> {
      return this.http.get<RoofPost>(this.myAppUrl + this.myApiUrl + Id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveRoofPost(roofPost): Observable<RoofPost> {
    debugger;
      return this.http.post<RoofPost>(this.myAppUrl + this.myApiUrl, JSON.stringify(roofPost), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateRoofPost(Id: number, roofPost): Observable<RoofPost> {
      return this.http.put<RoofPost>(this.myAppUrl + this.myApiUrl + Id, JSON.stringify(roofPost), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteRoofPost(Id: number): Observable<RoofPost> {
      return this.http.delete<RoofPost>(this.myAppUrl + this.myApiUrl + Id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
