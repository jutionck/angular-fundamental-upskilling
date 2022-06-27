import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './demo/parent/parent.component';
import { ChildComponent } from './demo/child/child.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DemoComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
