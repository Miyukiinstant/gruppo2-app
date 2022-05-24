import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaAmmComponent } from './cerca-amm.component';

describe('CercaAmmComponent', () => {
  let component: CercaAmmComponent;
  let fixture: ComponentFixture<CercaAmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaAmmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaAmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
