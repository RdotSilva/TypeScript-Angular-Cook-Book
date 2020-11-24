import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Favorite } from './favorite.model';

export class FavoritesResolver implements Resolve<Favorite> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Favorite> | Promise<Favorite> | Favorite {
    return new Favorite(true);
  }
}
