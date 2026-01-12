import { Component, signal } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Activity } from '../../models/activity.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  public allActivitiesForUser = signal<any[]>([]);
  public allActivitiesQuickStats = signal<any[]>([]);

  constructor(private activityService: ActivityService) { 
     activityService.getAllActivities().subscribe(res => {
      this.allActivitiesForUser.set(res);
    });
    this.updateQuicStats();
  }

  public updateQuicStats() {
    this.activityService.getQuickStatsForAll().subscribe(res => {
      this.allActivitiesQuickStats.set(res);
    });
    console.log('updateQuicStats()');
  }

}
