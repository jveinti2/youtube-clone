import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/core/services/videos.service';
import { ServicioVideosPendientesService } from 'src/app/core/services/servicio-videos-pendientes.service';
// import { ActualizarVideosService } from 'src/app/core/services/actualizar-videos.service';
import { SharingService } from 'src/app/core/services/sharing.service';
// import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  videos: any[] = [];
  searchVideos: string = '';
  data$: Observable<string>;

  constructor(
    private videosService: VideosService,
    private servicioVideosPendientesService: ServicioVideosPendientesService,
    private sharingService: SharingService
  ) {
    this.data$ = this.sharingService.SharingObservable;
    this.data$.subscribe((data) => {
      this.searchVideos = data;
      this.getVideos();
    });
  }

  ngOnInit(): void {
    this.videos = [];
    this.getVideos();
  }

  getVideos() {
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
  }

  // getVideos() {
  //   this.actualizarVideosService.actualizarVideos$.subscribe((data) => {
  //     this.searchVideos = data;
  //     console.log(
  //       'Desde cards viene de actualizarVideoServices->',
  //       this.searchVideos
  //     );

  //     this.videosService.getVideos(this.searchVideos).subscribe(
  //       (data: any) => {
  //         this.videos = []; // Limpiar el arreglo de videos antes de agregar nuevos

  //         data.videos.forEach((video: any) => {
  //           this.videos.push({
  //             id: video.id,
  //             image: video.image,
  //             src: video.video_files[0].link,
  //           });
  //         });
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   });
  // }

  addPending(video: any) {
    this.servicioVideosPendientesService.disparadorDeFavoritos.emit(video);
  }
}
