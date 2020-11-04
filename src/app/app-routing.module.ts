import { SortingComponent } from './sorting/sorting.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { RangeSliderFilterComponent } from './range-slider-filter/range-slider-filter.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterComponent } from './filter/filter.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/filter', pathMatch: 'full' },
  { path:'filter', component:FilterComponent },
  { path : 'checkbox', component : CheckboxFilterComponent },
  { path : 'slider', component : RangeSliderFilterComponent},
  { path : 'select', component:SelectFilterComponent },
  { path : 'sorting', component: SortingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
