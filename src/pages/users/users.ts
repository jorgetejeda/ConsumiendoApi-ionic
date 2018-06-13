import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//provider
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  userList: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.userList = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
