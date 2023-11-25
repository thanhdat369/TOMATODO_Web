import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() isCompleted: boolean = false
  @Input() taskName: string = ''
  @Input() duration: string = ''

  handleClick(event: Event) {
    this.isCompleted = !this.isCompleted;
  }

  handleDelete(event: Event) {
    console.log('Deleted');
  }
}
