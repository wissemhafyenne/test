// Angular
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// Services
import { BaseApiService } from '../global/base-api.service';

// Constant classes
import { ApiConstant } from '../../constants/api-constant';
import { Song } from '../../_modals/song';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private baseApiService: BaseApiService
  ) { }

  /**
   * Get song data
   * @returns {object}
   */
  getSongs(): Observable<any> {
    return this.baseApiService.get(ApiConstant.SONGS).pipe(
      map((response: any) => {
        if (response.data) {
          // Covert api response data into local data
          response.data = response.data.map((element: any) => {
            return new Song().toLocal(element);
          });
        }
        return response;
      })
    );
  }
  
}
