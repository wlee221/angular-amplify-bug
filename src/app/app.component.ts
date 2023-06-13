import { Component, OnInit } from '@angular/core';

import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-16-amplify-bug';

  ngOnInit(): void {
    // some usage of auth module
    Auth.currentAuthenticatedUser();
  }
}
