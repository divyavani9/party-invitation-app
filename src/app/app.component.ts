import { Component } from '@angular/core';
import { InvitationComponent } from './invitation/invitation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [InvitationComponent], // Include the standalone component here
})
export class AppComponent {}
