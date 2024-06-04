import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { CovidStaticsComponent } from './covid-statics/covid-statics.component';
import { CovidsService } from './covids.service';
import { ErrorInterceptor } from './error.interceptor';
import { NewsComponent } from './news/news.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    NewsComponent,
    CovidStaticsComponent,
    NavBarComponent,
    AdminComponent,
  ],
  imports: [
    NgxPaginationModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    CovidsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    provideAnimationsAsync(),
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntl }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
