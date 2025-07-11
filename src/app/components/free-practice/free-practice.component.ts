import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { zoomInAnimation } from '../../animations/zoom-in.animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-free-practice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './free-practice.component.html',
  styleUrl: './free-practice.component.scss',
  animations: [zoomInAnimation]
})
export class FreePracticeComponent {
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
