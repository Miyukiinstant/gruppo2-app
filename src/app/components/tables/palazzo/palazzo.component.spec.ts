import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalazzoComponent } from './palazzo.component';

describe('PalazzoComponent', () => {
  let component: PalazzoComponent;
  let fixture: ComponentFixture<PalazzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalazzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalazzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
