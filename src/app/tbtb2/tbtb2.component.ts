import { Component, OnInit } from '@angular/core';
import { PrmCheeseService } from '../service/prm-cheese.service'
import dummy from '../tbtb1/cheeseGyu.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tbtb2',
  templateUrl: './tbtb2.component.html',
  styleUrls: ['./tbtb2.component.css']
})
export class Tbtb2Component implements OnInit {
  goToFin = false;
  temp = "初期値だよ";
  questionNo = 0;
  questionSentence = "";
  answerSentence1 = "";
  answerSentence2 = "";
  answerSentence3 = "";
  answerSentence4 = "";
  constructor(
    private router: Router,
    private prmCheeseService: PrmCheeseService) {
  }

  ngOnInit(): void {
    this.goToFin = this.prmCheeseService.getFin();
    this.prmCheeseService.setcheese();
    this.prmCheeseService.addCurrentQuestionNo();
    this.questionNo = this.prmCheeseService.getCurrentQuestionNo();
    this.questionSentence = dummy[this.questionNo].questionSentence;
    this.answerSentence1 = dummy[this.questionNo].answer1;
    this.answerSentence2 = dummy[this.questionNo].answer2;
    this.answerSentence3 = dummy[this.questionNo].answer3;
    this.answerSentence4 = dummy[this.questionNo].answer4;
  }
  //Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

  onClickMe() {
    this.temp = this.prmCheeseService.getcheese();
    console.log(this.prmCheeseService.getCurrentQuestionNo());
    console.log(this.prmCheeseService.getResultList());
  }

  onClick1() {
    this.click1to4(1);
  }
  onClick2() {
    this.click1to4(2);
  }
  onClick3() {
    this.click1to4(3);
  }
  onClick4() {
    this.click1to4(4);
  }
  //各ボタン共通
  click1to4(i: number) {
    this.prmCheeseService.addResultList(i);
    if (this.questionNo == 10) {
      this.router.navigate(['/tbtbdetail']);
    } else {
      this.router.navigate(['/tbtb']);
    }
  }

}
