import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = environment.apiUrl + '/Activity';

  constructor(private http: HttpClient) {}

  public getAllActivities(): Observable<any> {
    return this.http.get<Observable<any>>(this.apiUrl + '/GetAll');
  }
}
