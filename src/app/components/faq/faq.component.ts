import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { fadeInDownAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-faq',
  imports: [AccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  animations: [
    fadeInDownAnimation
  ]
})
export class FaqComponent {
  @ViewChild('animBox', { static: false }) animBox!: ElementRef;
  show: boolean = false;
  isContentAppear: boolean = false;
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

  appearContent() {
    this.isContentAppear = true;
  }
}
