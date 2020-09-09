import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';
import {MatTableModule} from '@angular/material/table';
import { FakeuserService } from './fake-user.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatToolbarModule, MatTableModule, DragDropModule ],
  declarations: [ AppComponent, AppTableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FakeuserService]
})
export class AppModule { }
