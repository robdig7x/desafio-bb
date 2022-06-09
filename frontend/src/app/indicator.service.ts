import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private baseUrl = 'http://localhost:8080/v1/indicator';

  constructor(private http: HttpClient) { }

  getIndicatorList(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${code}`);
  }
}
