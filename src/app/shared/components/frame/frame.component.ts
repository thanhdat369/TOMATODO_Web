import { Component } from '@angular/core';

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

  constructor() {}

  addNewTask() {
    this.tasks.push({ name: 'New Task', isCompleted: false, duration: '60' });
    // Có thể thay đổi thông tin của task mới được thêm vào ở đây
  }
}
