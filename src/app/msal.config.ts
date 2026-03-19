import { BrowserCacheLocation, InteractionType, PublicClientApplication, type Configuration } from '@azure/msal-browser';
import type { MsalInterceptorConfiguration } from '@azure/msal-angular';

const msalConfig: Configuration = {
  auth: {
    // Replace this with your App Registration (client) ID from Azure portal.
    clientId: '2283697e-db74-4e49-9643-16307a4aa8d7',
    authority: 'https://login.microsoftonline.com/1bfd608a-dd73-43e1-8bcd-f3ac474edbf2',
    redirectUri: '/'
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage
  }
};

export function createMsalInstance(): PublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

export function createMsalInterceptorConfig(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string> | null>();

  // Update these to your protected API endpoint and API scope.
  const apiScopes = ['api://5cdfaba7-6bc4-485b-9a2f-6675753e7c59/access_as_user'];
  protectedResourceMap.set('http://localhost:5000/api/*', apiScopes);
  protectedResourceMap.set('http://localhost:5000/getApi', apiScopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}