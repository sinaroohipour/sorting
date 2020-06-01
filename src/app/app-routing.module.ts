import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataVisualizerComponent} from './views/data-visualizer/data-visualizer.component';


const routes: Routes = [
  {
    path: 'sortingVisualizer', component: DataVisualizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
