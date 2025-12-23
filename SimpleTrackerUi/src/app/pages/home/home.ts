import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntryDto } from '../../models/entry.model';
import { Entry } from '../../services/entry';


@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = 'MyApplicationTesting'
  public entries: any[] = [];

  public foo = 'testowy';


  constructor(private entryService: Entry) {
    entryService.get().subscribe(elements => {
      this.entries = elements;
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
