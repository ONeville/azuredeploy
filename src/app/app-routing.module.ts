import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  TesterComponent,
  PullBasedOneComponent,
  PushBasedOneComponent,
  StreamCompoComponent
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-01', component: TesterComponent },
  {
    path: 'pull-based',
    component: PullBasedOneComponent
  },
  { path: 'push-based', component: PushBasedOneComponent },
  { path: 'stream-compo', component: StreamCompoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
