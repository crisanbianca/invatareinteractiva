import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovareInEchipaComponent } from './inovare-in-echipa.component';

describe('InovareInEchipaComponent', () => {
  let component: InovareInEchipaComponent;
  let fixture: ComponentFixture<InovareInEchipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovareInEchipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovareInEchipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
