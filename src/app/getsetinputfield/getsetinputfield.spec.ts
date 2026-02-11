import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getsetinputfield } from './getsetinputfield';

describe('Getsetinputfield', () => {
  let component: Getsetinputfield;
  let fixture: ComponentFixture<Getsetinputfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getsetinputfield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getsetinputfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
