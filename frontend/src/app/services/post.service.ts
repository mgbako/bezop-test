import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AuthService } from './auth.service';

@Injectable()
export class PostService {

  constructor(private http: HttpService, private authService: AuthService) { }

  topic(data) {
    return this.http.post('admin/categories', data, this.authService.loadToken()).pipe(
      map(res => res),
      catchError(this.http.handlerError)
    );
  }

  getTopic() {
    return this.http.get('admin/categories', this.authService.loadToken()).pipe(
      map(res => res),
      catchError(this.http.handlerError)
    );
  }
}
