import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalazzoDeleteComponent } from './palazzo-delete.component';

describe('PalazzoDeleteComponent', () => {
  let component: PalazzoDeleteComponent;
  let fixture: ComponentFixture<PalazzoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalazzoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalazzoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
