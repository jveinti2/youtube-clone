import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  API_KEY = 'jDiBbcsBbCut1d3nQR6Wx0mdUXNBUVEZFEsKcLSULDBAnDfKDA0XZcuq';
  API_URL = `https://api.pexels.com/videos/search`;

  constructor(private http: HttpClient) {}

  getVideos(search: string = 'nature') {
    console.log('Desde servicio videos ->', search);
    const URL = `${this.API_URL}?query=${search}&per_page=10`;
    return this.http.get(URL, {
      headers: {
        Authorization: this.API_KEY,
      },
    });
  }
}
