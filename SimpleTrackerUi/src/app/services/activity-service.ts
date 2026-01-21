import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Activity } from '../models/activity.model';
import { ActivityQuickStats } from '../models/activity-quick-stats';
import { ActivityQuickStatsCompared } from '../models/activity-quick-stats-compared';

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

  public getQuickStatsComparedForAll(): Observable<ActivityQuickStatsCompared[]> {
    return this.http.get<ActivityQuickStatsCompared[]>(this.apiUrl + '/GetQuickStatsForAllCompareWithPreviousDays');
  }


  public createActivity(data: Activity): Observable<any> {
    console.log('POST ACTIVITY');
    return this.http.post<Activity>(this.apiUrl + '/Create', data);
  }
}
