import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpService {
  private baseUrl = environment.apiUrl;

  constructor(public http: HttpClient) {}

  get(url, token = null) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-type", "application/json");

    if (token) {
      headers = headers.append("Authorization", token);
    }

    return this.http.get(this.baseUrl + url, { headers: headers });
  }

  post(url: string, data, token = null) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-type", "application/json");

    if (token) {
      headers = headers.append("Authorization", token);
    }

    return this.http.post(this.baseUrl + url, data, { headers: headers });
  }

  put(url: string, data = null, token = null) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-type", "application/json");

    if (token) {
      headers = headers.append("Authorization", token);
    }

    return this.http.put(this.baseUrl + url, data, { headers: headers });
  }

  handlerError(error: HttpErrorResponse) {
    const errors = {
      status: error.status,
      message: error.error
    };

    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred", error.error.message);
    } else {
      console.error(`Backend returned code $(error.status)`);
      return new ErrorObservable(errors);
    }

    return new ErrorObservable(errors);
  }
}
