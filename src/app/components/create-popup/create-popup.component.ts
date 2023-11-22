import { Component } from '@angular/core';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.scss']
})
export class CreatePopupComponent {
  createPopupVisible: boolean = false;

  toggleCreatePopup(): void {
    this.createPopupVisible = !this.createPopupVisible;
  }

  onCreateOkClick(): void {
    
    this.createPopupVisible = false; 
    // Thêm logic xử lý khác nếu cần
  }
}
