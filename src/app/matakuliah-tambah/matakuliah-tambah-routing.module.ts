import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatakuliahTambahPage } from './matakuliah-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MatakuliahTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatakuliahTambahPageRoutingModule {}
