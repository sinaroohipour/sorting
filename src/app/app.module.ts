import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MergeComponent } from './views/merge/merge.component';
import { HomeComponent } from './views/home/home.component';
import { BubbleComponent } from './views/bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeComponent,
    HomeComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
