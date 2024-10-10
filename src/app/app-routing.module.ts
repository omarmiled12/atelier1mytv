import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';

const routes: Routes = [
  { path: 'tvs', component: TvsComponent },
  { path: 'add-tv', component: AddTvComponent },
  { path: 'update-tv/:id', component: UpdateTvComponent }, // Route with ID parameter
  { path: '', redirectTo: '/tvs', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
