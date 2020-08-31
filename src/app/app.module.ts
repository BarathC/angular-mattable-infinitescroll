import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';
import {MatTableModule} from '@angular/material/table';
import { FakeuserService } from './fake-user.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule, MatToolbarModule ],
  declarations: [ AppComponent, AppTableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FakeuserService]
})
export class AppModule { }
