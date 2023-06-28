import { Component, OnInit } from '@angular/core';
import { ServicioVideosPendientesService } from '../../services/servicio-videos-pendientes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  videosPendientes: any[] = [];

  constructor(
    private servicioVideosPendientesService: ServicioVideosPendientesService
  ) {}

  isOpen = false;

  ngOnInit(): void {
    this.servicioVideosPendientesService.disparadorDeFavoritos.subscribe(
      (data) => {
        console.log('Recibiendo data', data);
        this.videosPendientes.push(data);
      }
    );
  }
}
