import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayquizComponent } from './displayquiz.component';

describe('DisplayquizComponent', () => {
  let component: DisplayquizComponent;
  let fixture: ComponentFixture<DisplayquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
