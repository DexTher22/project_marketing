import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-active-projects',
  imports: [RouterLink],
  templateUrl: './active-projects.component.html',
  styleUrl: '../widget.css',
})
export class ActiveProjectsComponent {
  @Input() showProjectsLink = false;

  protected readonly projects = [
    { id: 1, title: 'Városi kávézók', status: 'Vágás alatt', thumbnail: 'thumb-cafe' },
    { id: 2, title: 'Kézműves hétvége', status: 'Leadás pénteken', thumbnail: 'thumb-market' },
  ];
}
