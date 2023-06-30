import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {
  videoUrl: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.videoUrl = params.get('url');
      console.log(this.videoUrl);
    });
  }
}
