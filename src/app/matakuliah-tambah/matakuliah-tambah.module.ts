import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatakuliahTambahPageRoutingModule } from './matakuliah-tambah-routing.module';

import { MatakuliahTambahPage } from './matakuliah-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatakuliahTambahPageRoutingModule
  ],
  declarations: [MatakuliahTambahPage]
})
export class MatakuliahTambahPageModule {}
