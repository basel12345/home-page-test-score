import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FeaturesComponent } from "./components/features/features.component";
import { StartPracticeComponent } from "./components/start-practice/start-practice.component";
import { WorksComponent } from "./components/works/works.component";
import { FreePracticeComponent } from "./components/free-practice/free-practice.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FeaturesComponent, StartPracticeComponent, WorksComponent, FreePracticeComponent, TestimonialsComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Home-Test-Score-Page';
}
