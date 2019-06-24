import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductsComponent } from './order-page/products/products.component';
import { OrderPageService } from './order-page/order-page.service';
import { OrderListComponent } from './order-page/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderPageComponent,
    ProductsComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    OrderPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
