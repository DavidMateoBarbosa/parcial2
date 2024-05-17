import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './objects';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  url: string = environment.api;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.url);
  }

}
