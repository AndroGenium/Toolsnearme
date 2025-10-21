import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AccountCreation } from './Pages/account-creation/account-creation';
import { HomePage } from './Pages/home-page/home-page';
import { Login } from './Pages/login/login';
import { Footer } from './Components/footer/footer';
import { Navbar } from './Components/navbar/navbar';
import { Products } from './Components/products/products';

@NgModule({
  declarations: [
    App,
    AccountCreation,
    HomePage,
    Login,
    Footer,
    Navbar,
    Products
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
