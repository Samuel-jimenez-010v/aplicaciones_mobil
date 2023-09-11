import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaContraPageRoutingModule } from './resta-contra-routing.module';

import { RestaContraPage } from './resta-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaContraPageRoutingModule
  ],
  declarations: [RestaContraPage]
})
export class RestaContraPageModule {}
