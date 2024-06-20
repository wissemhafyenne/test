import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:9090'; // URL de votre API Node.js

  constructor(private http: HttpClient) {}

  // Méthodes pour les événements
  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/evenement`);
  }

  getEventById(eventId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/evenement/${eventId}`);
  }

  addEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/evenement`, eventData);
  }

  updateEvent(eventId: string, eventData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/evenement/${eventId}`, eventData);
  }

  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/evenement/${eventId}`);
  }

  getEventByName(eventName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/evenement/name/${eventName}`);
  }

  getEventStatsByStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/evennement/stats/status`);
  }

  getEventStatsByComplex(): Observable<any> {
    return this.http.get(`${this.apiUrl}/evennement/stats/complex`);
  }

  getEventStatsByComplexId(complexId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/evennement/stats/complex/${complexId}`
    );
  }
}
