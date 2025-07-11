import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInDownAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-start-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-practice.component.html',
  styleUrl: './start-practice.component.scss',
  animations: [fadeInDownAnimation]
})
export class StartPracticeComponent {
}
