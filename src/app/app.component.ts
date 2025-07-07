import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Home-Test-Score-Page';

  constructor(public sideBarService: SidebarService) { }
}
