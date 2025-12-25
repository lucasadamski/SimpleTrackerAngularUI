import { Component } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  public allActivitiesForUser: Activity[] = [];

  constructor(private activityService: ActivityService) { 
     activityService.getAllActivities().subscribe(elements => {
      this.allActivitiesForUser = elements;
    });
  }

  
}
