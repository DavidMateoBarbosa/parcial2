import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component';
import { AnimesCollectionComponent } from './animes-collection/animes-collection.component';
import { DetailedAnimeComponent } from './detailed-anime/detailed-anime.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimesComponent, AnimesCollectionComponent, DetailedAnimeComponent],
  exports: [AnimesCollectionComponent, DetailedAnimeComponent]
})
export class AnimesModule { }
