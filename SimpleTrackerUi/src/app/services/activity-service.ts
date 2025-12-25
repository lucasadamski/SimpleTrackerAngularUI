import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Activity } from '../models/activity.model';
import { ActivityQuickStats } from '../models/activity-quick-stats';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = environment.apiUrl + '/Activity';

  constructor(private http: HttpClient) {}

  public getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl + '/GetAll');
  }

  public getQuickStatsForAll(): Observable<ActivityQuickStats[]> {
    return this.http.get<ActivityQuickStats[]>(this.apiUrl + '/GetQuickStatsForAll');
  }
}
