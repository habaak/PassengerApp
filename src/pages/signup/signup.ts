import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/passenger-app/authService';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  private account : any = {
    name:'',
    email:'',
    password:'',
    passwordchk:'',
    age:'',
    gender:''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthService,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  signup() {
    this.authService.postData(this.account,'users/join')
    .then((result)=>{
      this.responseData = result;
      if(this.responseData.isSuccess==1){
        console.log(this.responseData);
          localStorage.setItem('account',JSON.stringify(this.responseData));
          this.navCtrl.push(TabsPage);
          console.log('[localStorage]'+localStorage);
        
      }
      else{ 
        console.log(this.responseData); 
        let alert = this.alertCtrl.create({
          title: '회원가입 실패',
          subTitle: this.responseData.message,
          buttons: ['확인']
        });
        alert.present();
      }
    }, (err) =>{
      //Error log
    });
  }

}
