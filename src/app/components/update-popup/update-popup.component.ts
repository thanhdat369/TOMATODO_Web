import { Component } from '@angular/core';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.scss']
})
export class UpdatePopupComponent {
  updatePopupVisible: boolean = false;

  toggleUpdatePopup(): void {
    this.updatePopupVisible = !this.updatePopupVisible;
  }

  onUpdateOkClick(): void {
    // Xử lý khi nút OK trong Popup được nhấn
    this.updatePopupVisible = false; // Đóng Popup sau khi nhấn OK
    // Thêm logic xử lý khác nếu cần
  }
}
