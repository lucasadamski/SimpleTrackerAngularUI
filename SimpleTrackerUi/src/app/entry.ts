import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Entry {
  constructor() {}
  
  private http = inject(HttpClient);
  private url = environment.apiUrl + '/Entry/dto/testUser/01-01-2024/01-01-2034'

  public get(): Observable<any> {
    return this.http.get(this.url);
  }
}
