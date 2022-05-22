import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentiComponent } from './appartamenti.component';

describe('AppartamentiComponent', () => {
  let component: AppartamentiComponent;
  let fixture: ComponentFixture<AppartamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartamentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
