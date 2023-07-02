import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { ServicioVideosPendientesService } from 'src/app/services/servicio-videos-pendientes.service';
import { ActualizarVideosService } from 'src/app/services/actualizar-videos.service';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  videos: any[] = [];
  searchVideos: any = '';

  constructor(
    private videosService: VideosService,
    private servicioVideosPendientesService: ServicioVideosPendientesService,
    private actualizarVideosService: ActualizarVideosService
  ) {}

  ngOnInit(): void {
    this.actualizarVideosService.actualizarVideos$
      .pipe(startWith(null))
      .subscribe(() => {
        this.videos = [];
        this.getVideos();
      });
  }

  getVideos() {
    this.actualizarVideosService.actualizarVideos$.subscribe((data) => {
      this.searchVideos = data;
      console.log(
        'Desde cards viene de actualizarVideoServices->',
        this.searchVideos
      );

      this.videosService.getVideos(this.searchVideos).subscribe(
        (data: any) => {
          this.videos = []; // Limpiar el arreglo de videos antes de agregar nuevos

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
    });
  }

  addPending(video: any) {
    this.servicioVideosPendientesService.disparadorDeFavoritos.emit(video);
  }
}
