import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  openSideBar: boolean = false;
  constructor() { }
}
