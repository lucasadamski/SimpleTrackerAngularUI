import { Component, signal } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Activity } from '../../models/activity.model';
import { Injectable } from '@angular/core';
import { ReloadService } from '../../services/reload-service';
import { ActivityQuickStatsCompared } from '../../models/activity-quick-stats-compared';

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
  public allActivitiesQuickStats = signal<ActivityQuickStatsCompared[]>([]);

  constructor(private activityService: ActivityService, private reloadService: ReloadService) { 
     activityService.getAllActivities().subscribe(res => {
      this.allActivitiesForUser.set(res);
    });

    this.updateQuicStats();
  }

  ngOnInit() {
    this.reloadService.reload$.subscribe(() => {
      this.updateQuicStats();
    });
  }

  public updateQuicStats() {
    this.activityService.getQuickStatsComparedForAll().subscribe(res => {
      this.allActivitiesQuickStats.set(res);
    });
    console.log('updateQuicStats()');
  }

}
