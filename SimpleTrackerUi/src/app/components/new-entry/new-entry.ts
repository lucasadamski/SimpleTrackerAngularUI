import { Component, signal } from '@angular/core';
import { ActivityService } from '../../services/activity-service';
import { Entry } from '../../services/entry';
import { EntryDto } from '../../models/entry.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-entry',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CommonModule],
  templateUrl: './new-entry.html',
  styleUrl: './new-entry.css',
})
export class NewEntry {
protected readonly title = 'MyApplicationTesting'
  public entries: any[] = [];
  public activities = signal<any[]>([]);

  constructor(private entryService: Entry, private activityService: ActivityService) {
    activityService.getAllActivities().subscribe(res => {
      this.activities.set(res);
      console.log(`Activities: ${this.activities()}`);
    });
  }
  
  selectedActivityId: number = 1;
  selectedEntryValue: any = '';
  
  public createEntry() {
    const payload: EntryDto = {
      value: this.selectedEntryValue,
      activityId: this.selectedActivityId,
    };

    this.entryService.postData(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }
}
