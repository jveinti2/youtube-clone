import { Component } from '@angular/core';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-clone';
  videos: any[] = [];
  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videos.push(this.videosService.getVideos());
  }
}
