import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrmCheeseService {

  constructor() {
   }

  private cheese;
  private fin:boolean;
  private currentQuestionNo = 0;
  private resultList: number[];
  array =  [];

  //テスト
  setcheese() {
    this.cheese = "fromService";
  }
  getcheese(){
    return this.cheese;
  }
  //結果画面行きフラグ
  setFin(){
    this.fin = true;
  }
  getFin(){
   return this.fin;
  }
  //質問Noのカウントを進める
  addCurrentQuestionNo(){
    this.currentQuestionNo = this.currentQuestionNo + 1;
  }
  getCurrentQuestionNo(){
    return this.currentQuestionNo;
  }

  //選択値配列操作
  addResultList(num : number){
    
    this.array.push(num);
    this.resultList = this.array;
  }
  getResultList(){
    return this.resultList;
  }


}
