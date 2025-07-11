import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fadeInDownAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  animations: [
    fadeInDownAnimation
  ]  
})
export class FeaturesComponent {
  @ViewChild('animBox', { static: false }) animBox!: ElementRef;
  show: boolean = false;
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

}
