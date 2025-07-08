import { Component, inject } from '@angular/core';
import { SidebarService } from './../../services/sidebar.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private sidebarService = inject(SidebarService);
  constructor() { }

  toogleSideBar() {
    this.sidebarService.openSideBar = !this.sidebarService.openSideBar;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior:"smooth" });
  }

  login() {
    window.open('https://testandscoreapi.github.io/TASUI/')
  }

}
