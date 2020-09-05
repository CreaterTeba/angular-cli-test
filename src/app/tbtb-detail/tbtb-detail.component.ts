import { Component, OnInit } from '@angular/core';
import { PrmCheeseService } from '../service/prm-cheese.service'
import { JudgeCheeseService } from '../service/judge-cheese.service'

@Component({
  selector: 'app-tbtb-detail',
  templateUrl: './tbtb-detail.component.html',
  styleUrls: ['./tbtb-detail.component.css']
})
export class TbtbDetailComponent implements OnInit {
  array: number[];
  displayImage;
  displayCheeseTypeName;
  displayDiscription;
  constructor(
    private prmCheeseService: PrmCheeseService,
    private judgeCheeseService: JudgeCheeseService,
  ) { }

  ngOnInit(): void {
    this.judgeCheeseService.setResultList(this.prmCheeseService.getResultList());
    const displayInfo: string[] = this.judgeCheeseService.getInfo();
    this.displayCheeseTypeName = displayInfo[0];
    this.displayDiscription = displayInfo[1];
    this.displayImage = displayInfo[2];
  }
}
