import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }
}
