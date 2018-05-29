import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup'
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/passenger-app/authService';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  private account : any = {
    email : '',
    password : ''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.authService.postData(this.account,'users/login')
    .then((result)=>{
      console.log("[Result]"+JSON.stringify(result));
      this.responseData = result;
      if(this.responseData.isSuccess==1){
        console.log("[LOGIN response]"+this.responseData);
          console.log(this.responseData.accout);
          localStorage.setItem('account',JSON.stringify(this.responseData));
          console.log('[localStorage]'+localStorage);
          this.navCtrl.push(TabsPage);
        
      }
      else{
        console.log(this.responseData); 
        let alert = this.alertCtrl.create({
          title: '로그인 실패',
          subTitle: this.responseData.message,
          buttons: ['확인']
        });
        alert.present();
      }
    })
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
}
