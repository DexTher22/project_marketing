import { Component } from '@angular/core';

@Component({
  selector: 'app-new-listings',
  templateUrl: './new-listings.component.html',
  styleUrl: '../widget.css',
})
export class NewListingsComponent {
  protected readonly listings = [
    { id: 1, title: 'Rövid termékvideó', location: 'Budapest', thumbnail: 'thumb-product' },
    { id: 2, title: 'Eseményfotózás', location: 'Debrecen', thumbnail: 'thumb-event' },
  ];
}
