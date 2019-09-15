import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier'; // import NotifierService


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly notifier: NotifierService;
  title = 'toaster';

  constructor( notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

  notify(type, message) {
    this.notifier.notify( type, message ); // call notification
  }
}
