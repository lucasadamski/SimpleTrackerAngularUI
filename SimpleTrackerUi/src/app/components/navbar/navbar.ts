import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserStore } from '../../services/user-store';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  public loginName = signal<string>('');

  constructor(private userStore: UserStore) {
     userStore.getFullName().subscribe(res => {
      this.loginName.set(res)
  });
  }

  

}
