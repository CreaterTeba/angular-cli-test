import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JudgeCheeseService {

  constructor(
  ) { }
  resultList = [];
  sum = 0;
  setResultList(num: number[]) {
    this.resultList = num;
  }
  getResultList() {
    return this.resultList;
  }

  keisan() {
    this.resultList.forEach(num => {
      this.sum = this.sum + num;
    })
  }
  getSum(){
    return this.sum
  }



}
