import { Component } from '@angular/core';

import { App, IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  public user_data = {
    profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
    name_surname: 'HABAAK',
    username: '박준하',
    website: 'https://github.com/candelibas',
    description: 'Software developer, open-source lover & Invoker spammer',
    email: 'candelibas00@gmail.com',
    phone: '',
    gender: 'male'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public appCtrl: App
    ) {
  }

  backToLogin(){
    const root = this.appCtrl.getRootNav();
    root.popToRoot();
  }
  logout() {
      localStorage.clear();
      setTimeout(()=> this.backToLogin(),1000);
  }
}
