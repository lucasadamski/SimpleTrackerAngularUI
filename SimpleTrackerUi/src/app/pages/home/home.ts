import { Component, inject } from '@angular/core';
import { EntryDto } from '../../models/entry.model';
import { Entry } from '../../services/entry';
import { Activity } from '../../models/activity.model';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivityService } from '../../services/activity-service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = 'MyApplicationTesting'
  public entries: any[] = [];
  public activities: Activity[] = [];

  public foo = 'testowy';

  selectedValue: string = 'Select activity';

  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  constructor(private entryService: Entry, private activityService: ActivityService) {
    entryService.get().subscribe(elements => {
      this.entries = elements;
    });
    
    activityService.getAllActivities().subscribe(elements => {
      this.activities = elements;
    });
  }
  
  public postNewEntry() {
    const payload: EntryDto = {
      value: 124,
      activityId: 2,
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
