import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private _http: Http) {}

  getFactory(url: string, data?: object): Observable<any> {
    return this._http.get(url, { params: data }).map(res => res.json());
  }

  postFactory(url: string, body: object, data?: object): Observable<any> {
    return this._http.post(url, body, { params: data }).map(res => res.json());
  }

  putFactory(url: string, body: object, data?: object): Observable<any> {
    return this._http.put(url, body, { params: data }).map(res => res.json());
  }

  delFactory(url: string, id: string): Observable<any> {
    return this._http.delete(url, { params: id }).map(res => res.json());
  }
}
