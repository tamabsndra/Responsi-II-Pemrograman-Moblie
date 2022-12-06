import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatakuliahPageRoutingModule } from './matakuliah-routing.module';

import { MatakuliahPage } from './matakuliah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatakuliahPageRoutingModule
  ],
  declarations: [MatakuliahPage]
})
export class MatakuliahPageModule {}
