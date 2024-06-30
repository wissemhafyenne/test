import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complexe } from '../../_modals/complexe'
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComplexeService {
  private apiUrl = `${environment.apiUrl}/complexe`;

  constructor(private http: HttpClient) { }

  getAllComplexe(): Observable<Complexe[]> {
    return this.http.get<Complexe[]>(this.apiUrl);
  }

  findComplexeById(id: string): Observable<Complexe> {
    return this.http.get<Complexe>(`${this.apiUrl}/${id}`);
  }

  getUserComplexe(userId: string): Observable<Complexe[]> {
    return this.http.get<Complexe[]>(`${this.apiUrl}/user/${userId}`);
  }

  postComplexe(complexeData: FormData): Observable<Complexe> {
    return this.http.post<Complexe>(this.apiUrl, complexeData);
  }

  patchComplexeById(id: string, complexeData: Partial<Complexe>): Observable<Complexe> {
    return this.http.patch<Complexe>(`${this.apiUrl}complexe/${id}`, complexeData);
  }

  deleteComplexeById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  getComplexeStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}complexe/stats`);
  }
}
