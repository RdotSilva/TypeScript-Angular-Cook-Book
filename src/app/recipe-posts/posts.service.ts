import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

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
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  /**
   * Fetch all existing posts
   */
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(`${config.url}`, {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams,
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  /**
   * Delete all existing posts
   */
  deletePosts() {
    return this.http.delete(`${config.url}/posts.json`);
  }
}
