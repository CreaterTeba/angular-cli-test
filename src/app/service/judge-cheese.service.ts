import { Injectable } from '@angular/core';
import { Attribute } from 'src/app/class/attribute'
import cheeseTypeMaster from 'src/assets/cheeseTypeMaster.json'
import typeImageTran from 'src/assets/typeImageTran.json'
import { PictureSelectorService } from './picture-selector.service'

@Injectable({
  providedIn: 'root'
})
export class JudgeCheeseService {

  constructor(
    // private attribute: Attribute,
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

  //チー牛属性計算とタイプ 
  calAttribute() {
    console.log(String(this.resultList))
    //よくわからんけど、配列が変だったから、文字列化した後、カンマスプリットで文字列配列化した
    let array = String(this.resultList).split(",");

    //確定チー牛系
    switch (array[0]) {
      case "3"://牛
        this.cheeseTypeNo = 2;
        break;
      case "4"://牛丼
        this.cheeseTypeNo = 1;
        break;
    }
  }
}
