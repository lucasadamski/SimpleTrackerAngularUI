import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  private apiUrl = environment.apiUrl + '/Activity';

  constructor(private http: HttpClient)
  {
  }

   public getAll(): Observable<any> {
      return this.http.get(this.apiUrl + '/GetAllUnits');
    }

}
