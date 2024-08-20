import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  template: `
    <h1>Party Invitation</h1>
    <p>Date: January 20, 2023</p>
    <p>Time: 7:00 PM</p>
    <p>Location: 123 Main Street, Angularville</p>
  `,
  standalone: true,
})
export class InvitationComponent {}
