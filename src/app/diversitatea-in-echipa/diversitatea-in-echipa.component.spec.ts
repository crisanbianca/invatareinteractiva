import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversitateaInEchipaComponent } from './diversitatea-in-echipa.component';

describe('DiversitateaInEchipaComponent', () => {
  let component: DiversitateaInEchipaComponent;
  let fixture: ComponentFixture<DiversitateaInEchipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversitateaInEchipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversitateaInEchipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
