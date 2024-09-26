import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../interfaces/hero.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SuperheroDataService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Root[]> {
    return this.http.get<Root[]>(`${this.apiUrl}all.json`);
  }
}
