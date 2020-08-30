import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tbtb1Component } from './tbtb1/tbtb1.component';
import { TbtbDetailComponent } from './tbtb-detail/tbtb-detail.component';
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Tbtb2Component } from './tbtb2/tbtb2.component'; // 追加

const routes: Routes = [
{ path: 'tbtb', component: Tbtb1Component },
{ path: 'tbtb2', component: Tbtb2Component },
{ path: 'tbtbdetail', component: TbtbDetailComponent },
{ path: '', redirectTo: '/tbtb', pathMatch: 'prefix' },
]

@NgModule({
  declarations: [
    AppComponent,
    Tbtb1Component,
    TbtbDetailComponent,
    Tbtb2Component,
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment), // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
