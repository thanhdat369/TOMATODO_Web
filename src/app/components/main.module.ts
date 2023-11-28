import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePopupComponent } from './create-popup/create-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreatePopupComponent, DeletePopupComponent, UpdatePopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [CreatePopupComponent, DeletePopupComponent, UpdatePopupComponent],
})
export class MainModule {}
