import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';
import { MaterialModule } from './material/material.module';
import { PokeMainService } from './services/poke-main.service';
import { FormsModule } from '@angular/forms';
import { PathService } from './api/path.service';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPipe } from './pipes/search.pipe';
import { NotificationService } from './notification/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserDynamicTestingModule
  ],
  exports: [
    MaterialModule,
    PokeHeaderComponent,
    SearchPipe,
    HttpClientModule,
    BrowserDynamicTestingModule
  ],
  providers: [
    PokeMainService,
    PathService,
    NotificationService
  ],
  entryComponents: [
    PokeHeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
