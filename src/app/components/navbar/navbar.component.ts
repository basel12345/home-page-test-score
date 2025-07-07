import { Component, inject } from '@angular/core';
import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private sidebarService = inject(SidebarService);
  constructor() { }

  toogleSideBar() {
    this.sidebarService.openSideBar = !this.sidebarService.openSideBar;
  }

}
