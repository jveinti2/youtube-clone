import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private sharingObservablePrivate: BehaviorSubject<string> =
    new BehaviorSubject<string>('Personas');

  get SharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set SharingObservableData(data: string) {
    this.sharingObservablePrivate.next(data);
  }
}
