import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  listaPosts$ = new Observable<Post[]>()

  constructor(private postService: PostService) { }

  title: string = "Posts"

  cargarPosts() {
    this.listaPosts$ = this.postService.getPosts()
  }
}
