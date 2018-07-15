import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {
  chopp: any;
  choppsAdds = [];

  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
      this.chopp = viewCtrl.data;
  }

  
  add(ml: number): void{
    if(ml == 300)
       this.chopp.quantidade300 += 1;
    if(ml == 500)
       this.chopp.quantidade500 += 1;
    this.choppsAdds.push(this.chopp);
  }

  remove(ml: number): void{
    if(this.chopp.quantidade300 > 0 && ml == 300) {
      this.chopp.quantidade300 -= 1;
    }
    if(this.chopp.quantidade500 > 0 && ml == 500) {
      this.chopp.quantidade500 -= 1;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
