import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const fadeInDownAnimation = trigger('fadeInDown', [
  transition(':enter', [
    animate('{{ duration }} {{delay}} ease-out', keyframes([
      style({ opacity: 0, transform: '{{ offset }}', offset: 0 }),
      style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
    ]))
  ], {
    params: {
      duration: '700ms',
      offset: 'translateY(-40px)',
      delay: '0ms'
    }
  })
]);
