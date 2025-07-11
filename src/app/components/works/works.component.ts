import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fadeInLeftAnimation } from '../../animations/fade-in-left.animation';
import { CommonModule } from '@angular/common';
import { fadeInDownAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  animations: [
    fadeInLeftAnimation,
    fadeInDownAnimation
  ]
})
export class WorksComponent {
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
