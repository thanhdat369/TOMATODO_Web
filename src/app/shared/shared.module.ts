import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/component/card.component';
import { PopupFormComponent } from './components/popup-form/popup-form.component';
import { FrameComponent } from './components/frame/frame.component';


@NgModule({
  declarations: [CardComponent, PopupFormComponent, FrameComponent],
  imports: [CommonModule],
  exports: [CardComponent, PopupFormComponent, FrameComponent],
})
export class SharedModule {}
