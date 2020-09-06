import { Injectable } from '@angular/core';
import { Attribute } from 'src/app/class/attribute'
import cheeseTypeMaster from 'src/assets/cheeseTypeMaster.json'
import typeImageTran from 'src/assets/typeImageTran.json'
import { PictureSelectorService } from './picture-selector.service'
import { AttributeMarker } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class JudgeCheeseService {

  constructor(
    private pictureSelectorService: PictureSelectorService,
  ) { }
  resultList: number[];
  cheeseTypeNo = 3;//プレーンを初期値
  cheeseTypeName = ""
  cheeseDiscription = "";
  cheeseImagePath = "";
  sum = 0;

  //リザルトリスト
  setResultList(array: number[]) {
    this.resultList = array;
  }
  getResultList() {
    return this.resultList;
  }
  //本サービス最上位
  getInfo() {
    this.calAttribute();//チー牛タイプセット
    this.fullSetCheese(this.cheeseTypeNo);//周辺情報セット
    const returnInfo: string[] = [this.cheeseTypeName, this.cheeseDiscription, this.cheeseImagePath];
    return returnInfo;
  }

  //チー牛属性計算とタイプ 
  calAttribute() {
    // //よくわからんけど、配列が変だったから、文字列化した後、カンマスプリットで文字列配列化した
    let array = String(this.resultList).split(",");
    let attribute = new Attribute(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    //得点振り分け
    switch (array[0]) {
      case "1": break;
      case "2": attribute.setFemale(attribute.getFemale() + 100); break;
      case "3": attribute.setUshi(attribute.getUshi() + 200); break;
      case "4": attribute.setGyudon(attribute.getGyudon() + 200); break;
    }
    switch (array[1]) {
      case "1": attribute.setHinekure(attribute.getHinekure() + 100); break;
      case "2": break;
      case "3": attribute.setHinekure(attribute.getHinekure() + 1); break;
      case "4": attribute.setMukiryoku(attribute.getMukiryoku() + 1); break;
    }
    switch (array[2]) {
      case "1": attribute.setSeitouha(attribute.getSeitouha() + 1);
      case "2": break;
      case "3": attribute.setFat(attribute.getFat() + 100); break;
      case "4": break;
    }
    switch (array[3]) {
      case "1": attribute.setOsyarekaminoke(attribute.getOsyarekaminoke() + 100);
      case "2": attribute.setHinekure(attribute.getHinekure() + 1); break;
      case "3": attribute.setKaminokenashi(attribute.getKaminokenashi() + 100); break;
      case "4": attribute.setMama(attribute.getMama() + 1); break;
    }
    switch (array[4]) {
      case "1": attribute.setOta(attribute.getOta() + 1); break;
      case "2": attribute.setOta(attribute.getOta() + 1);
        attribute.setFate(attribute.getFate() + 1); break;
      case "3": attribute.setOta(attribute.getOta() + 1);
        attribute.setFate(attribute.getFate() + 1); break;
      case "4": attribute.setOta(attribute.getOta() + 1);
        attribute.setHinekure(attribute.getHinekure() + 1);
        attribute.setZen(attribute.getZen() - 1);
        attribute.setFate(attribute.getFate() + 1);
        break;
    }
    switch (array[5]) {
      case "1": attribute.setOta(attribute.getOta() + 1);
        attribute.setSeitouha(attribute.getSeitouha() + 1);
        attribute.setZen(attribute.getZen() + 1);
        break;
      case "2": attribute.setMukiryoku(attribute.getMukiryoku() + 1); break;
      case "3": attribute.setHinekure(attribute.getHinekure() + 1);
        break;
      case "4": attribute.setIkiri(attribute.getIkiri() + 100); break;
    }
    switch (array[6]) {
      case "1": attribute.setOsyare(attribute.getOsyare() + 1); break;
      case "2": attribute.setMukiryoku(attribute.getMukiryoku() + 1); break;
      case "3": attribute.setSeitouha(attribute.getSeitouha() + 1);
        attribute.setOsyare(attribute.getOsyare() + 1);
        break;
      case "4": attribute.setMukiryoku(attribute.getMukiryoku() + 1);
        attribute.setMama(attribute.getMama() + 1);
        attribute.setOsyare(attribute.getOsyare() - 1);
        break;
    }
    switch (array[7]) {
      case "1": attribute.setOta(attribute.getOta() + 1);
        attribute.setSeitouha(attribute.getSeitouha() + 1);
        break;
      case "2": attribute.setOsyare(attribute.getOsyare() + 1); break;
      case "3": break;
      case "4": attribute.setMama(attribute.getMama() + 1); break;
    }
    switch (array[8]) {
      case "1": attribute.setOta(attribute.getOta() + 3); break;
      case "2": attribute.setOta(attribute.getOta() + 1); break;
      case "3": attribute.setOta(attribute.getOta() + 1); break;
      case "4": break;
    }
    switch (array[9]) {
      case "1": attribute.setZen(attribute.getZen() + 1);
        break;
      case "2": attribute.setHinekure(attribute.getHinekure() + 1);
        attribute.setZen(attribute.getZen() - 1);
        break;
      case "3": attribute.setZen(attribute.getZen() + 1); break;
      case "4": attribute.setMukiryoku(attribute.getMukiryoku() + 1); break;
    }

    // //得点判定(優先度準で記述)
    console.log(attribute);
    let flg: boolean = false;
    //Type1 牛丼
    if (flg == false && attribute.getGyudon() >= 10) {
      this.cheeseTypeNo = 1;
      flg = true;
    }
    //Type2 牛
    if (flg == false && attribute.getUshi() >= 10) {
      this.cheeseTypeNo = 2;
      flg = true;
    }
    //Type6 イキリ
    if (flg == false && attribute.getIkiri() >= 10) {
      this.cheeseTypeNo = 6;
      flg = true;
    }
    //Type4 Fate牛
    if (flg == false && attribute.getFate() >= 1) {
      this.cheeseTypeNo = 4;
      flg = true;
    }
    //Type5
    if (flg == false && (attribute.getHinekure() >= 2 || attribute.getZen() <= 0)) {
      this.cheeseTypeNo = 5;
      flg = true;
    }


  }
  //フルセット(説明と画像No、画像path)
  fullSetCheese(num: number) {
    //チー牛名
    this.cheeseTypeName = cheeseTypeMaster[num].type;
    //説明
    this.cheeseDiscription = cheeseTypeMaster[num].discription;
    //path(変換マスタで、チー牛タイプに適した画像出力)
    this.pictureSelectorService.setSelectPath(typeImageTran[num].imageNo);
    this.cheeseImagePath = this.pictureSelectorService.getSelectPath();
  }
}
