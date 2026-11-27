import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-messages',
  templateUrl: './recent-messages.component.html',
  styleUrl: '../widget.css',
})
export class RecentMessagesComponent {
  protected readonly messages = [
    { id: 1, sender: 'Bence', initial: 'B', text: 'Megnéztem az első vágatot.', unread: true },
    { id: 2, sender: 'Dani', initial: 'D', text: 'Küldöm a forgatási tervet.', unread: true },
  ];

  protected get unreadCount(): number {
    return this.messages.filter((message) => message.unread).length;
  }
}
