import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../../../core/_modals/evenement';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  private apiUrl = `${environment.apiUrl}/evenement`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiUrl);
  }

  findEvennementById(id: string): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.apiUrl}/${id}`);
  }

  // addEvenement(event: Evenement): Observable<any> {
  //    return this.http.post<Evenement>(this.apiUrl, event);
  // return this.http.post<Evenement>(this.apiUrl, event);
  //}
  addEvenement(eventData: FormData): Observable<Evenement> {
    return this.http.post<Evenement>(this.apiUrl, eventData);
  }

  /* addEvenement1(formData: FormData): Observable<Evenement> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data', 
    });
    return this.http.post<Evenement>(this.apiUrl, formData, { headers });
  } */
  updateEvennement(id: string, event: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.apiUrl}/${id}`, event);
  }

  updateEvennementField(
    id: string,
    updateData: Partial<Evenement>
  ): Observable<Evenement> {
    return this.http.patch<Evenement>(`${this.apiUrl}/${id}`, updateData);
  }

  findByName(name: string): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.apiUrl}/name/${name}`);
  }

  deleteEvennement(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEvennementStatsByStatus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats/status`);
  }

  getEvennementStatsByComplex(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats/complex`);
  }

  getEvennementStatsByComplexId(complexId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats/complex/${complexId}`);
  }
}
