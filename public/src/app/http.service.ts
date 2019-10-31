import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getTasks(){
    console.log("This gets logged when component is loaded");
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTasksById(id:string){
    return this._http.get('/tasks/:id');
  }

}
