import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MergeComponent} from './views/merge/merge.component';
import {HomeComponent} from './views/home/home.component';
import {BubbleComponent} from './views/bubble/bubble.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Merge', component: MergeComponent
  },
  {
    path: 'Bubble', component: BubbleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
