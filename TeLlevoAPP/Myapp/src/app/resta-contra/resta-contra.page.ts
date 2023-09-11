import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-resta-contra',
  templateUrl: './resta-contra.page.html',
  styleUrls: ['./resta-contra.page.scss'],
})
export class RestaContraPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  NavLogin(){
    this.presentToast("Se ha recuperado su contraseña");
    this.navCtrl.navigateRoot('/login');
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2500
      }
    );
    toast.present();
  }
}
