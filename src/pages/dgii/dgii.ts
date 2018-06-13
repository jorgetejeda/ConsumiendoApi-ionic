import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//DGII Service provider
import { DgiiServiceProvider } from '../../providers/dgii-service/dgii-service';

/**
 * Generated class for the DgiiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dgii',
  templateUrl: 'dgii.html',
})
export class DgiiPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dgiiService: DgiiServiceProvider) {
  }

  rnc: number= 0;

  contribuyente: {
    RGE_RUC?: string;
    RGE_NOMBRE?: string;
    NOMBRE_COMERCIAL?: string;
    CATEGORIA?: string;
    REGIMEN_PAGOS?: string;
    ESTATUS?: string;
  }

  getRnc() {
    this.dgiiService.getRNC(this.rnc).subscribe((data) => {
        this.contribuyente = data;
        console.log(this.contribuyente.NOMBRE_COMERCIAL);
    }, (error) => {
      console.error(error);
    }) 
  }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad DgiiPage');
  // }

}
