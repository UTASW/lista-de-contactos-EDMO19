import { ServiceService } from './../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  /*showNotas:boolean;
  sexo: string;
  blnNext:boolean;
  arrPersonas: Array<any> = [] as Array<JSON>
  contacto:boolean;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  regexptelefono = new RegExp(/^([0-9])*$/);
  */

  constructor(public servicio : ServiceService) {
    /*this.showNotas = false;
    this.contactos();
    this.sexo = "h";
    */
  }
  /*event1(event){
    this.sexo = event.target.value;
  }

contactos(){
  if(this.arrPersonas.length == 0){
    this.contacto=false;
  }else{
    this.contacto=true;
  }
}

  addPerson(strNombre: string, strTelefono: string,strEmail: string,strNotas: string){
    this.blnNext = false;
    (strNombre) ? this.fnError() : this.fnError('Error: Rellene el campo nombre');
    (strTelefono) ? (this.regexptelefono.test(strTelefono)) ? this.fnError : this.fnError('Error: El telefono debe contener solo valores numericos') : this.fnError('Error: Rellene el campo telefono');
    (strEmail) ? (this.regexp.test(strEmail)) ? this.fnError() :this.fnError('Error: Correo invalido') : this.fnError('Error. Error favor de llenar el campo correo');
    (strNotas) ? this.fnError() : this.fnError('Error: Rellene el campo notas');
    if(!this.blnNext){
    let strSexo:string;
    strSexo = this.sexo;
    const jsnPersona: any = {
      strNombre,
      strTelefono,
      strEmail,
      strNotas,
      strSexo
    };
    this.presentAlert();
    this.arrPersonas.push(jsnPersona);
    this.contactos();
    }
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Se añadio el contacto',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlerterror(msg){
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  showNote(){
    this.showNotas =!this.showNotas;
  }

  async presentAlertConfirm(item,nombre) {
    const alert = await this.alertController.create({
      header: 'Eliminar!',
      message: 'Desea eliminar <strong> ' + nombre +'? </strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'OK',
          handler: () => {
            let a = this.arrPersonas.indexOf(item);
            this.arrPersonas.splice(a,1);
            this.contactos();
          }
        }
      ]
    });
    await alert.present();
   
  }

  fnError(msg?:string){
    if(msg){
      this.presentAlerterror(msg);
      this.blnNext = true;
    }else if(this.blnNext){
      this.blnNext = true;
    }else{
      this.blnNext = false;
    }
  }*/
}