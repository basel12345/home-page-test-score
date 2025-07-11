import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { fadeInBottomRightAnimation } from '../../animations/fade-In-bottom-right.animation';
import { fadeInDownAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [FormsModule, Rating],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  animations: [
    fadeInBottomRightAnimation,
    fadeInDownAnimation
  ]
})
export class TestimonialsComponent {
  value: number = 5;
  show: boolean = false;
  showSecond = false;

  @ViewChild('animBox', { static: false }) animBox!: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkIfVisible();
  }
  checkIfVisible() {
    if (!this.animBox) return;

    const rect = this.animBox.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if top of div is within viewport (you can adjust threshold)
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.show = true;
    }
  }

  onFirstAnimationDone() {
    this.showSecond = true;
    console.log(this.showSecond);
    
  }
}
