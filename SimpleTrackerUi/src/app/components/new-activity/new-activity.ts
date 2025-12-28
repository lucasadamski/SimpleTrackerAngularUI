import { Component, signal } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit-service';
import { ActivityService } from '../../services/activity-service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-activity',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CommonModule],
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

    this.activityService.createActivity(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }
}