import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifelseloops } from './ifelseloops';

describe('Ifelseloops', () => {
  let component: Ifelseloops;
  let fixture: ComponentFixture<Ifelseloops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ifelseloops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifelseloops);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
