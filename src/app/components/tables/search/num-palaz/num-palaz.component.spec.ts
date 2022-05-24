import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPalazComponent } from './num-palaz.component';

describe('NumPalazComponent', () => {
  let component: NumPalazComponent;
  let fixture: ComponentFixture<NumPalazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumPalazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumPalazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
