import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-clone';
  videos: any[] = [];
  path = '';
  constructor(private location: Location) {}
  ngOnInit(): void {
    this.path = this.location.path();
  }
}
