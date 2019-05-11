import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BasicCreationComponent } from './basic-creation/basic-creation.component';
import { OperatorsComponent } from './operators/operators.component';
import { AsyncComponent } from './async/async.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicCreationComponent,
    OperatorsComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
