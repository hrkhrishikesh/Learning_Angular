import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcontrols } from './formcontrols';

describe('Formcontrols', () => {
  let component: Formcontrols;
  let fixture: ComponentFixture<Formcontrols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcontrols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formcontrols);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
