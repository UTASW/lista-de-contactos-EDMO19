import { Component, OnInit} from '@angular/core';
import {AlertController, IonItem} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(public alertController: AlertController) {
    
  }
  ngOnInit():void{
    
  }

}