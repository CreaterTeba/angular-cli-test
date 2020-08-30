import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router: Router
  title = 'tbtb-app';
  //各ボタン共通
  click_router() {
    this.router.navigate(['/tbtb']);
  }
}

