import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { StartPracticeComponent } from '../../components/start-practice/start-practice.component';
import { WorksComponent } from '../../components/works/works.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FreePracticeComponent } from '../../components/free-practice/free-practice.component';

@Component({
  selector: 'app-home',
  imports: [FeaturesComponent, StartPracticeComponent, WorksComponent, FreePracticeComponent, TestimonialsComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
