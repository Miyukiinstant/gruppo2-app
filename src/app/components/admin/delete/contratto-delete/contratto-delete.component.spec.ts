import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrattoDeleteComponent } from './contratto-delete.component';

describe('ContrattoDeleteComponent', () => {
  let component: ContrattoDeleteComponent;
  let fixture: ComponentFixture<ContrattoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrattoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrattoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
