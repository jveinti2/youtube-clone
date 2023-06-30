import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ReproductorComponent } from './pages/reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    SidebarComponent,
    HomeComponent,
    ReproductorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
