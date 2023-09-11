import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChild('titulo', { read: ElementRef }) titulo: ElementRef;

  usuario:String = "";

  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };

  animacion : any;

  constructor(public alertController: AlertController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController) {
    
      this.titulo = ElementRef.prototype as any;
      
  }

  ngAfterViewInit() {
    this.animacion = this.animationCtrl.create('titulo')
      .addElement(this.titulo.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')

      .fromTo('opacity', '1', '0.5')
      

      this.animacion.play();
  }


  Volver(){
    this.navCtrl.navigateRoot('/login')
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}

