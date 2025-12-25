import { Component, signal } from '@angular/core';
import { EntryDto } from '../../models/entry.model';
import { Entry } from '../../services/entry';
import { Activity } from '../../models/activity.model';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivityService } from '../../services/activity-service';
import { CommonModule } from '@angular/common';
import { Stats } from "../../components/stats/stats";


@Component({
  selector: 'app-home',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CommonModule, Stats, Stats],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
  selectedEntryValue: number = 0;

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

  updateEntry() {
    const postPayload = { id: 6, value: 1234 }
    this.entryService.putData(postPayload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }

  deleteEntry() {
    var id = 6;     // hardcoded !!!
    this.entryService.deleteData(id).subscribe({
      next: (response) => {
        console.log('Delete sucessful ' + response);
      },
      error: (response) => {
        console.error('Delete failed ' + response);
      }
    });
  }
}
