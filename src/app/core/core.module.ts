import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingService } from './services/sharing.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SharingService, AuthService],
})
export class CoreModule {}
