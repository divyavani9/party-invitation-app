import { bootstrapApplication } from '@angular/platform-browser';
import { InvitationComponent } from './app/invitation/invitation.component';

bootstrapApplication(InvitationComponent)
  .catch(err => console.error(err));
