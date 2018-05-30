import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { AuthService } from "./auth.service";

@Injectable()
export class MediaService {
  constructor(private http: HttpService, private authService: AuthService) {}

  newMedia(data) {
    return this.http
      .post("medias", data, this.authService.loadToken())
      .pipe(map(res => res), catchError(this.http.handlerError));
  }

  getMedias() {
    return this.http
      .get("medias", this.authService.loadToken())
      .pipe(map(res => res), catchError(this.http.handlerError));
  }
}
