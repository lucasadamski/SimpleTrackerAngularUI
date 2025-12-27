import { Component, signal } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-new-activity',
  imports: [],
  templateUrl: './new-activity.html',
  styleUrl: './new-activity.css',
})
export class NewActivity {
  protected readonly title = 'MyApplicationTesting'
  public entries: any[] = [];
  public activities = signal<any[]>([]);

  constructor(private activityService: ActivityService) {
    activityService.getAllActivities().subscribe(res => {
      this.activities.set(res);
    });
    //add units services
  }
  
  unitId = 1;  
  activityName = '';
  
  public createActivity() {
    const payload: Activity = {
      id: 0,
      name: this.activityName,
      unitId: this.unitId,
      userId: ''
    };

    this.activityService.createActivity(payload).subscribe({ // activitySsSerice 
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }
}