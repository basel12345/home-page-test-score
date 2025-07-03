import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPracticeComponent } from './start-practice.component';

describe('StartPracticeComponent', () => {
  let component: StartPracticeComponent;
  let fixture: ComponentFixture<StartPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
