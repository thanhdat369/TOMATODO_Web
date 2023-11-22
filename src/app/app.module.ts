import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupFormComponent } from './shared-components/popup-form/popup-form.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { UpdatePopupComponent } from './components/update-popup/update-popup.component';
import { CreatePopupComponent } from './components/create-popup/create-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupFormComponent,
    DeletePopupComponent,
    UpdatePopupComponent,
    CreatePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
