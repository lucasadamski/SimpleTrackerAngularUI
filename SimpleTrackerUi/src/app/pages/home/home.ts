import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entry } from '../../entry';
import { SendEntry } from '../../send-entry';

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


  constructor(private postEntryService: SendEntry, entryService: Entry) {
    entryService.get().subscribe(elements => {
      this.entries = elements;
    });
  }

  public postNewEntry() {
    const payload = { value: 555, activityId: 3 }

    this.postEntryService.postData(payload).subscribe({
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
    this.postEntryService.putData(postPayload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
  }

  deleteEntry() {
    var id = 6;
    this.postEntryService.deleteData(id).subscribe({
      next: (response) => {
        console.log('Delete sucessful ' + response);
      },
      error: (response) => {
        console.error('Delete failed ' + response);
      }
    });
  }
}
