import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaContraPage } from './resta-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RestaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaContraPageRoutingModule {}
