import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-recipe-posts',
  templateUrl: './recipe-posts.component.html',
  styleUrls: ['./recipe-posts.component.css'],
})
export class RecipePostsComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
