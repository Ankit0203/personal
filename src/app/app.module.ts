import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //Used for string filter
import { FilterComponent } from './filter/filter.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { FilterPipePipe } from './checkbox-filter/filter-pipe.pipe'; // For checkbox 
import { RangeSliderFilterComponent } from './range-slider-filter/range-slider-filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { SortingComponent } from './sorting/sorting.component';
import { SortPipe } from './sorting/sort.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,ReactiveFormsModule, Ng2SearchPipeModule,AppRoutingModule,
  
],
  declarations: [ AppComponent, FilterComponent, CheckboxFilterComponent, FilterPipePipe, RangeSliderFilterComponent, SelectFilterComponent, SortingComponent, SortPipe,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
