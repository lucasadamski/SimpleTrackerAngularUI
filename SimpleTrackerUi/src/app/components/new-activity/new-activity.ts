import { Component, signal } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit-service';
import { ActivityService } from '../../services/activity-service';

@Component({
  selector: 'app-new-activity',
  imports: [],
  templateUrl: './new-activity.html',
  styleUrl: './new-activity.css',
})
export class NewActivity {
  public units = signal<any[]>([]);
 
  constructor(private unitService: UnitService, private activityService: ActivityService) {
    unitService.getAll().subscribe(res => {
      this.units.set(res);
    });
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