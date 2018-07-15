import { ModalTotalComponent } from './../../components/modal-total/modal-total';
import { ModalComponent } from './../../components/modal/modal';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  choppesList = [];
  nomeChopp: string;
  total: number;
  totalDividido: number;

  constructor(public modalCtrl: ModalController, private http: Http) {
    this.getChoppsList();
  }

  getChoppsList(){
    this.http.get('http://api.myjson.com/bins/1c66x3')
    .toPromise()
      .then((chopps)=>{
         this.choppesList = chopps.json();
    }); 
  }

  calculaTotal(){
    let total = 0.0;
    this.choppesList.forEach(function(chopp){
      if(chopp.quantidade300 > 0 ) {
          total += Number.parseFloat(chopp.preco300) * chopp.quantidade300;
      }
      if(chopp.quantidade500 > 0) {
          total += Number.parseFloat(chopp.preco500) * chopp.quantidade500;
      }
    });
    this.total = total;
    this.totalDividido = total;
  }

  alterarChoppes(chopp: any) {
    this.nomeChopp = chopp.nome;
    let profileModal = this.modalCtrl.create(ModalComponent, chopp);
    profileModal.present();
  }

  configurarTotal() {
    this.calculaTotal();
    let bill =  {"total": this.total, "totalDividido": this.totalDividido};
    let profileModal = this.modalCtrl.create(ModalTotalComponent, bill);
    profileModal.present();
  }

  limpar(){
    this.getChoppsList();    
    this.total = 0;
    this.totalDividido = 0;
  }

}
