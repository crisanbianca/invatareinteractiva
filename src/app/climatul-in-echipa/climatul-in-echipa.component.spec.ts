import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatulInEchipaComponent } from './climatul-in-echipa.component';

describe('ClimatulInEchipaComponent', () => {
  let component: ClimatulInEchipaComponent;
  let fixture: ComponentFixture<ClimatulInEchipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimatulInEchipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatulInEchipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
