import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  _apiBase = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  sendGetRequest(url: string) {
    return this.httpClient.get(this._apiBase + url);
  }

  sendGetRequestFull(full_url: string) {
    return this.httpClient.get(full_url);
  }
}
