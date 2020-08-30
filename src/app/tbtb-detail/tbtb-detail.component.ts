import { Component, OnInit } from '@angular/core';
import {PrmCheeseService} from '../service/prm-cheese.service'
import {JudgeCheeseService} from '../service/judge-cheese.service'

@Component({
  selector: 'app-tbtb-detail',
  templateUrl: './tbtb-detail.component.html',
  styleUrls: ['./tbtb-detail.component.css']
})
export class TbtbDetailComponent implements OnInit {
  getPrm = "";
  array = [];
  constructor(
    private prmCheeseService: PrmCheeseService,
    private judgeCheeseService: JudgeCheeseService,
    ) { }

  ngOnInit(): void {
    this.array = this.prmCheeseService.getResultList();
    this.judgeCheeseService.setResultList(this.array);
    this.judgeCheeseService.keisan();
    console.log(this.judgeCheeseService.getSum());
  }
}