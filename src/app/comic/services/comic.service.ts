import {environment} from '../../../environments/environment';
import { Comic } from '../models/comic';
import { Observable } from 'rxjs';
const baseUrl = `${environment.apiUrl}`;
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }

  public getComics(): Observable<any> {
    return this.http.get<Comic[]>(baseUrl);
  }

  public getComic(id: string): Observable<any> {
    return this.http.get<Comic>(`${baseUrl}/${id}`);
  }
}
