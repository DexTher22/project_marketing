import { Component } from '@angular/core';

@Component({
  selector: 'app-project-invitations',
  templateUrl: './project-invitations.component.html',
  styleUrl: '../widget.css',
})
export class ProjectInvitationsComponent {
  protected readonly invitation = {
    title: 'Tavaszi márkabemutató',
    description: 'Termékbemutató videó',
    details: 'A hirdető egy 30 másodperces álló videót kér a tavaszi kampányhoz.',
  };
}
