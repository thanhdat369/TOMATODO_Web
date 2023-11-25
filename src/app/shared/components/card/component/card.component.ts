import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() isComplete: boolean = false
  @Input() taskName: string = ''
  @Input() time: string = ''

  handleClick(event: Event) {
    this.isComplete = !this.isComplete;
  }

  handleDelete(event: Event) {
    console.log('Deleted');
  }
}
