import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent {
  deletePopupVisible: boolean = false;

  toggleDeletePopup(): void {
    this.deletePopupVisible = !this.deletePopupVisible;
  }

  onDeleteOkClick(): void {
    // Xử lý khi nút OK trong Delete Popup được nhấn
    this.deletePopupVisible = false; // Đóng Delete Popup sau khi nhấn OK
    // Thêm logic xử lý khác nếu cần
  }
}
