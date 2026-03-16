import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MsalService } from '@azure/msal-angular';

import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  const msalServiceMock = {
    initialize: () => of(void 0),
    handleRedirectObservable: () => of({ account: { name: 'Test User', username: 'test@example.com' } }),
    loginRedirect: () => of(void 0),
    logoutRedirect: () => of(void 0),
    instance: {
      getActiveAccount: () => null,
      getAllAccounts: () => [],
      setActiveAccount: () => undefined
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [{ provide: MsalService, useValue: msalServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
