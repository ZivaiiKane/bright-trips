import { NgModule } from '@angular/core';
import { MainComponent } from '../features/dashboard/pages/main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
