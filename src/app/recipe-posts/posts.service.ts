import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  /**
   * Create a new post
   * @param title - Title of the post
   * @param content - Content of the post
   */
  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title: title,
      content: content,
    };

    this.http
      .post<{ name: string }>(`${config.url}/posts.json`, postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  /**
   * Fetch all existing posts
   */
  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(`${config.url}`).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

  deletePosts() {
    return this.http.delete(`${config.url}/posts.json`);
  }
}
