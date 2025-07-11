import { animate, style, transition, trigger } from '@angular/animations';

export const zoomInAnimation = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(1)' }),
    animate('2400ms ease-out', style({ opacity: 1, transform: 'scale(1.2)' }))
  ])
]);
