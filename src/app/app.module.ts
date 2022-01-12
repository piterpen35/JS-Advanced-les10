import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorTopComponent } from './editor-top/editor-top.component';
import { EditorMiddleComponent } from './editor-middle/editor-middle.component';
import { EditorBottomComponent } from './editor-bottom/editor-bottom.component';
import { EditorAddComponent } from './editor-add/editor-add.component';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { BlockedWindowComponent } from './blocked-window/blocked-window.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorTopComponent,
    EditorMiddleComponent,
    EditorBottomComponent,
    EditorAddComponent,
    NoSanitizePipe,
    BlockedWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
