import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const fadeInLeftAnimation = trigger('fadeInLeft', [
  transition(':enter', [
    animate('{{ duration }} ease-out', keyframes([
      style({ opacity: 0, transform: '{{ offset }}', offset: 0 }),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
    ]))
  ], {
    params: {
      duration: '700ms',
      offset: 'translateX(-40px)'
    }
  })
]);
