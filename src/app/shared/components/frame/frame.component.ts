import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  tasks: any[] = [
    { name: 'Task 1', isCompleted: false, duration: '30' },
    { name: 'Task 2', isCompleted: true, duration: '45' },
    { name: 'Task 3', isCompleted: false, duration: '60'},
    { name: 'Task 4', isCompleted: true, duration: '120'},
    // ... Các task khác
  ];

  constructor(private elementRef: ElementRef) {}

  addNewTask() {
    this.tasks.push({ name: 'New Task', isCompleted: false, duration: '60' });
    // Có thể thay đổi thông tin của task mới được thêm vào ở đây
  }

  handleScroll(event: any) {
    const element: HTMLElement = this.elementRef.nativeElement.querySelector('.form-holder');
    const scrolled = element.scrollTop + element.clientHeight;
    const totalHeight = element.scrollHeight;

    if (scrolled === totalHeight) {
      // Hiển thị các task bị ẩn khi cuộn tới cuối cùng
      console.log('Đã cuộn tới cuối cùng. Hiển thị các task bị ẩn nếu có.');
    }
  }
}
