import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../paths';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private service:HttpClient) { }

  getAll(){
    let menu=this.service.get(paths.nav);
    return menu;
  }
}
