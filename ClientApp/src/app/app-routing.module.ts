import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoofPropertiesComponent } from './roof-properties/roof-properties.component';
import { RoofPropertyComponent } from './roof-property/roof-property.component';
import { RoofPropertyAddEditComponent } from './roof-property-add-edit/roof-property-add-edit.component';

const routes: Routes = [
  { path: '', component: RoofPropertiesComponent, pathMatch: 'full' },
  { path: 'roofpost/:id', component: RoofPropertyComponent },
  { path: 'add', component: RoofPropertyAddEditComponent },
  { path: 'roofpost/edit/:id', component: RoofPropertyAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
