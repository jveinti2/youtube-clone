import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { ServicioVideosPendientesService } from 'src/app/services/servicio-videos-pendientes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  videos: any[] = [];

  constructor(
    private videosService: VideosService,
    private servicioVideosPendientesService: ServicioVideosPendientesService
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videosService.getVideos().subscribe(
      (data: any) => {
        data.videos.forEach((video: any) => {
          this.videos.push({
            id: video.id,
            image: video.image,
            src: video.video_files[0].link,
          });
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addPending(video: any) {
    this.servicioVideosPendientesService.disparadorDeFavoritos.emit(video);
  }
}
