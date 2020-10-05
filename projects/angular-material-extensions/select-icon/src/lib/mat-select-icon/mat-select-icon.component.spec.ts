import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectIconComponent } from './mat-select-icon.component';

describe('MatSelectIconComponent', () => {
  let component: MatSelectIconComponent;
  let fixture: ComponentFixture<MatSelectIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSelectIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
