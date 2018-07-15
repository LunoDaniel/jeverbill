import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the ModalTotalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-total',
  templateUrl: 'modal-total.html'
})
export class ModalTotalComponent {

  billTotal: string;
  billForN: string;
  numeroPessoas = 0;
 


  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

    this.billTotal = parseFloat(viewCtrl.data.total).toFixed(2);
    this.billForN = parseFloat(viewCtrl.data.totalDividido).toFixed(2);
    
  }

  dividirTotal(): string {
    let parcialDivTotal;
    if(parseFloat(this.billTotal) > 0 && this.numeroPessoas > 0){
        parcialDivTotal = (parseFloat(this.billTotal) / this.numeroPessoas);
        this.billForN = parseFloat(parcialDivTotal).toFixed(2).toString();
    } else if(parseFloat(this.billTotal) > 0) {
        this.billForN = this.billTotal;
    }
    return this.billForN;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
