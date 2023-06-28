import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  videos: any[] = [];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videosService.getVideos().subscribe(
      (data: any) => {
        data.videos.forEach((video: any) => {
          this.videos.push({
            image: video.image,
            src: video.video_files[0].link,
          });
        });
        console.log(this.videos);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
