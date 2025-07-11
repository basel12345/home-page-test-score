import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInBottomRightAnimation = trigger('fadeInBottomRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translate(100px, 100px)' }),
    animate('1000ms ease-out', style({ opacity: 1, transform: 'translate(0, 0)' }))
  ])
]);

