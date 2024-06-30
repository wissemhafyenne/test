import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../../_modals/terrain';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private apiUrl = `${environment.apiUrl}/terrain`;

  constructor(private http: HttpClient) { }

  getAllTerrains(): Observable<Terrain[]> {
    return this.http.get<Terrain[]>(this.apiUrl);
  }

  findTerrainById(id: string): Observable<Terrain> {
    return this.http.get<Terrain>(`${this.apiUrl}/${id}`);
  }
  
  getUserTerrain(complexeId: string): Observable<Terrain[]> {
    return this.http.get<Terrain[]>(`${this.apiUrl}/user/${complexeId}`);
  }

  postTerrain(terrainData: FormData): Observable<Terrain> {
    return this.http.post<Terrain>(this.apiUrl, terrainData);
  }

  patchTerrainById(id: string, terrainData: Partial<Terrain>): Observable<Terrain> {
    return this.http.patch<Terrain>(`${this.apiUrl}/${id}`, terrainData);
  }

  deleteTerrainById(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  getTerrainEquipmentsStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
}
