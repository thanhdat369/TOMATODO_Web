import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  @Input() type: string = '';
  @Input() msg: string = '';
  @Input() onOkClick: Function = () => {};
  @Input() isVisible: boolean = false;
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>(); // Sự kiện closePopup

  onCloseClick(): void {
    this.isVisible = false;
    this.closePopup.emit(); // Gửi sự kiện closePopup
  }

}