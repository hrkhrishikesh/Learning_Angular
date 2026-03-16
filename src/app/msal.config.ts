import { BrowserCacheLocation, PublicClientApplication, type Configuration } from '@azure/msal-browser';

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