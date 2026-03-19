import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import type { AccountInfo } from '@azure/msal-browser';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {
  private readonly authService = inject(MsalService);
  private readonly http = inject(HttpClient);

  readonly isAuthInitialized = signal(false);
  readonly userName = signal<string | null>(null);
  readonly userEmail = signal<string | null>(null);
  readonly tenantId = signal<string | null>(null);
  readonly isLoggedIn = computed(() => this.userEmail() !== null || this.userName() !== null);
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.authService.initialize().subscribe({
      next: () => {
        this.authService.handleRedirectObservable().subscribe({
          next: (result) => {
            if (result?.account) {
              this.authService.instance.setActiveAccount(result.account);
            }

            this.setUserDetailsFromAccount();
            this.isAuthInitialized.set(true);
          },
          error: () => {
            this.setUserDetailsFromAccount();
            this.isAuthInitialized.set(true);
          }
        });
      },
      error: () => {
        this.setUserDetailsFromAccount();
        this.isAuthInitialized.set(true);
      }
    });
  }

  gotoprofile(){
    //this.router.navigate(['profile'], {queryParams:{name:'HRK'}});
    
  }

  callGetApi(): void {
    this.http.get('http://localhost:5000/api/test').subscribe({
      next: (response) => {
        console.log('GET /getApi response:', response);
      },
      error: (error) => {
        console.error('GET /getApi failed:', error);
      }
    });
  }

  private setUserDetailsFromAccount(): void {
    const account = this.getCurrentAccount();
    this.userName.set(account?.name ?? null);
    this.userEmail.set(account?.username ?? null);
    this.tenantId.set(account?.tenantId ?? null);
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
