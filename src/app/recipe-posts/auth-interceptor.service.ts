import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`Request is on its way`);
    console.log(`Request URL: ${req.url}`);

    let modifiedRequest = req.clone({
      url: 'new-url',
      headers: req.headers.append('Auth', 'xyz'),
    });

    return next.handle(modifiedRequest);
  }
}
