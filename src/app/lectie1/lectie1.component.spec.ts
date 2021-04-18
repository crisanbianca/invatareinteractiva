import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectie1Component } from './lectie1.component';

describe('Lectie1Component', () => {
  let component: Lectie1Component;
  let fixture: ComponentFixture<Lectie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lectie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lectie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
