import { Injectable } from '@angular/core';
import picture from 'src/assets/imageList.json'

@Injectable({
  providedIn: 'root'
})
export class PictureSelectorService {

  constructor() { }

  private select;

  //パス読み込み
  setSelectPath(s:number) {
    this.select = picture[s].selectPicturePath;
  }
  getSelectPath(){
    return this.select;
  }












}
