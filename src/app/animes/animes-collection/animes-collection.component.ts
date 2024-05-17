import { Component, OnInit } from '@angular/core';
import { Anime } from '../objects';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-animes-collection',
  templateUrl: './animes-collection.component.html',
  styleUrls: ['./animes-collection.component.css']
})
export class AnimesCollectionComponent implements OnInit {
  selected: boolean = false;
  animes: Anime[] = []
  anime!: Anime;

  constructor(private service: AnimesService) { }

  onSelected(anime: Anime) {
    this.selected = true;
    this.anime = anime;
  }

  loadMessage(): string {
    let episodies: number = this.animes.reduce((cumulative, current) => cumulative + current.episode, 0);
    let rating: number = this.animes.reduce((cumulative, current) => cumulative + Number.parseFloat(current.Rating), 0) / Math.max(this.animes.length, 1);
    return `The total amount of episodies is ${episodies} and the rating average is ${rating.toFixed(2)}`;
  }

  ngOnInit() {
    this.service.getAnimes().subscribe(animes => this.animes = animes);
  }

}
