import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, TesterComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-01', component: TesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
