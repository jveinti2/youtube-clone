import { Component, OnInit } from '@angular/core';
import { ServicioVideosPendientesService } from '../../core/services/servicio-videos-pendientes.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { ActualizarVideosService } from '../../core/services/actualizar-videos.service';
import { SharingService } from '../../core/services/sharing.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  videosPendientes: any[] = [];
  search: any = '';
  user= {
    status: true,
    nombre:  ''
  }
  
  constructor(
    private servicioVideosPendientesService: ServicioVideosPendientesService,
    // private actualizarVideosService: ActualizarVideosService,
    private sharingService: SharingService
  ) {}

  isOpen = false;

  ngOnInit(): void {
    this.servicioVideosPendientesService.disparadorDeFavoritos.subscribe(
      (data) => {
        this.videosPendientes.push(data);
      }
    );
  }

  drop($event: CdkDragDrop<any[]>) {
    console.log($event);
    moveItemInArray(
      this.videosPendientes,
      $event.previousIndex,
      $event.currentIndex
    );
  }

  getVideos() {
    this.sharingService.SharingObservableData = this.search;
  }
}
