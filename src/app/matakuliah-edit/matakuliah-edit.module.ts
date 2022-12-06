import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatakuliahEditPageRoutingModule } from './matakuliah-edit-routing.module';

import { MatakuliahEditPage } from './matakuliah-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatakuliahEditPageRoutingModule
  ],
  declarations: [MatakuliahEditPage]
})
export class MatakuliahEditPageModule {}
