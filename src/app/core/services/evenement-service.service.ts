import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EvenementServiceService {
  private apiUrl = 'http://localhost:9090/evenement';
  constructor(private http: HttpClient) { }
  getEvents(){
    return this.http.get(`${this.apiUrl}`)
  }
}
