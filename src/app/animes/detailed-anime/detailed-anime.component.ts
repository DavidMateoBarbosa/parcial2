import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../objects';

@Component({
  selector: 'app-detailed-anime',
  templateUrl: './detailed-anime.component.html',
  styleUrls: ['./detailed-anime.component.css']
})
export class DetailedAnimeComponent implements OnInit {
  @Input() anime!: Anime;
  
  constructor() { }

  ngOnInit() {
  }

}
