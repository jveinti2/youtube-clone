import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  API_KEY = 'jDiBbcsBbCut1d3nQR6Wx0mdUXNBUVEZFEsKcLSULDBAnDfKDA0XZcuq';
  API_URL = 'https://api.pexels.com/videos/search?query=nature&per_page=10';

  constructor(private http: HttpClient) {
    this.getVideos();
  }

  getVideos() {
    return this.http.get(this.API_URL, {
      headers: {
        Authorization: this.API_KEY,
      },
    });
  }
}
