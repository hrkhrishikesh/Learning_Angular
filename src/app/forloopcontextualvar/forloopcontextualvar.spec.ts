import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forloopcontextualvar } from './forloopcontextualvar';

describe('Forloopcontextualvar', () => {
  let component: Forloopcontextualvar;
  let fixture: ComponentFixture<Forloopcontextualvar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forloopcontextualvar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forloopcontextualvar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
