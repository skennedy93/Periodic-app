import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CallsComponent } from './calls/calls.component';
import { ResponseComponent } from './response/response.component';
import { BlackoutComponent } from './blackout/blackout.component';
import { TryComponent } from './try/try.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CallsComponent,
    ResponseComponent,
    BlackoutComponent,
    TryComponent,
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
