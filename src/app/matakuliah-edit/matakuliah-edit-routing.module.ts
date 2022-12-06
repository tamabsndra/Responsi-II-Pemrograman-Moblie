import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatakuliahEditPage } from './matakuliah-edit.page';

const routes: Routes = [
  {
    path: ':id',
    component: MatakuliahEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatakuliahEditPageRoutingModule {}
