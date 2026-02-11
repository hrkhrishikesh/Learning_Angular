import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentchild } from './parentchild';

describe('Parentchild', () => {
  let component: Parentchild;
  let fixture: ComponentFixture<Parentchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentchild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
