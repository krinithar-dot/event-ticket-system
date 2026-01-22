import { Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { UserDashboard } from './user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', component: EventList },
  { path: 'dashboard', component: UserDashboard }
];
