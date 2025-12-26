import { Component, signal } from '@angular/core';
import { NewEntry } from '../../components/new-entry/new-entry';
import { Stats } from '../../components/stats/stats';

@Component({
  selector: 'app-home',
  imports: [NewEntry, Stats],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = 'MyApplicationTesting';
  constructor() { }
}
