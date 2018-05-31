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
      .post("medias", data)
      .pipe(map(res => res), catchError(this.http.handlerError));
  }

  getMedias() {
    return this.http
      .get("medias")
      .pipe(map(res => res), catchError(this.http.handlerError));
  }

  trash(id) {
    return this.http
      .put("medias/" + id + "/trash")
      .pipe(map(res => res), catchError(this.http.handlerError));
  }
}
