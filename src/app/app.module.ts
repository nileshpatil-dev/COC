import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { MastersModule } from './masters/masters.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        HomeModule,
        AboutModule,
        LoginModule,
        MastersModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
