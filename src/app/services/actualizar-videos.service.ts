import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActualizarVideosService {
  constructor() {}
  private actualizarVideos = new BehaviorSubject<string>('naturaleza');

  actualizarVideos$ = this.actualizarVideos.asObservable();

  notificarActualizarVideos(search: string) {
    this.actualizarVideos.next(search);
  }
}
