import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MergeComponent} from './views/merge/merge.component';

const routes: Routes = [
  {
    path: '', component: MergeComponent
  },
  {
    path: 'Merge', component: MergeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
