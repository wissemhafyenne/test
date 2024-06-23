import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:9090/api/favorites';

  constructor(private http: HttpClient) {}

  toggleFavorite(itemId: string, isFavorite: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/toggle`, { itemId, isFavorite });
  }
}
