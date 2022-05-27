import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmministratoreDeleteComponent } from './amministratore-delete.component';

describe('AmministratoreDeleteComponent', () => {
  let component: AmministratoreDeleteComponent;
  let fixture: ComponentFixture<AmministratoreDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmministratoreDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmministratoreDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
