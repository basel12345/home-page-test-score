import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router = inject(Router);

  constructor() { }
  

  termsCondition() {
    this.router.navigate(['/terms-conditions']);
  }

  privacy() {
    this.router.navigate(['/privacy']);
  }

  scrollTo(sectionId: string, path: string = '') {
    if (path) {
      this.router.navigate([path]);
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior:"smooth" });
  }

}
