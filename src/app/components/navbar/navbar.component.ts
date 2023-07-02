import { Component, OnInit } from '@angular/core';
import { ServicioVideosPendientesService } from '../../services/servicio-videos-pendientes.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActualizarVideosService } from '../../services/actualizar-videos.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  videosPendientes: any[] = [];
  search: any = '';

  constructor(
    private servicioVideosPendientesService: ServicioVideosPendientesService,
    private actualizarVideosService: ActualizarVideosService
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
    console.log('Desde navbar ->', this.search);
    this.actualizarVideosService.notificarActualizarVideos(this.search);
  }
}
