import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import type { AccountInfo, RedirectRequest } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  private readonly authService = inject(MsalService);

  readonly isInitialized = signal(false);
  readonly currentUserName = signal<string | null>(null);
  readonly errorMessage = signal<string | null>(null);
  readonly isLoggedIn = computed(() => this.currentUserName() !== null);

  ngOnInit(): void {
    this.authService.initialize().subscribe({
      next: () => {
        this.authService.handleRedirectObservable().subscribe({
          next: (result) => {
            if (result?.account) {
              this.authService.instance.setActiveAccount(result.account);
            }

            const account = this.getCurrentAccount();
            this.currentUserName.set(account?.name ?? account?.username ?? null);
            this.errorMessage.set(null);
            this.isInitialized.set(true);
          },
          error: () => {
            this.errorMessage.set('Redirect response handling failed. Check redirect URI settings.');
            this.isInitialized.set(true);
          }
        });
      },
      error: () => {
        this.errorMessage.set('MSAL initialization failed. Check your MSAL settings.');
      }
    });
  }

  login(): void {
    if (!this.isInitialized()) {
      return;
    }

    const loginRequest: RedirectRequest = {
      scopes: ['openid', 'profile'],
      redirectStartPage: '/'
    };

    this.authService.loginRedirect(loginRequest).subscribe({
      error: () => {
        this.errorMessage.set('Login redirect failed. Verify app registration and redirect URI.');
      }
    });
  }

  logout(): void {
    this.authService.logoutRedirect({ postLogoutRedirectUri: '/' }).subscribe({
      error: () => {
        this.errorMessage.set('Logout redirect failed. Try again.');
      }
    });
  }

  private getCurrentAccount(): AccountInfo | null {
    const activeAccount = this.authService.instance.getActiveAccount();
    if (activeAccount) {
      return activeAccount;
    }

    const accounts = this.authService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.authService.instance.setActiveAccount(accounts[0]);
      return accounts[0];
    }

    return null;
  }
}
