import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderulEchipeiComponent } from './liderul-echipei.component';

describe('LiderulEchipeiComponent', () => {
  let component: LiderulEchipeiComponent;
  let fixture: ComponentFixture<LiderulEchipeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiderulEchipeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiderulEchipeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
