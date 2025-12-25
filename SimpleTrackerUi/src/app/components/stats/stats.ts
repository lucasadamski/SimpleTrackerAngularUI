import { Component, signal } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  public allActivitiesForUser = signal<any[]>([]);

  constructor(private activityService: ActivityService) { 
     activityService.getAllActivities().subscribe(res => {
      this.allActivitiesForUser.set(res);
      console.log(`Stats component -> ActivitiesForUser ${this.allActivitiesForUser}`);
    });
  }
}
