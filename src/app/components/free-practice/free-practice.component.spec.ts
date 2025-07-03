import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePracticeComponent } from './free-practice.component';

describe('FreePracticeComponent', () => {
  let component: FreePracticeComponent;
  let fixture: ComponentFixture<FreePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreePracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
