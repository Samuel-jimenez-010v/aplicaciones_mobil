import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  // Modelo user que permite obtener y setear información para el login
  login:any={
    Usuario:"",
    password:""
  }

  // variable para mostrar el campo faltante
  field:string="";  
  
  // Constructor que llama al toastController para su uso
  constructor(
    public toastController: ToastController,
    private navCtrl: NavController
    ) {}
  ngOnInit() {}

  NavHome() {
    if(this.validateModel(this.login)){
      this.presentToast("Bienvenido " + this.login.Usuario);
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
    this.navCtrl.navigateRoot('/home'); // Navegar a la página 'home'
  }

  NavContra() {
    this.navCtrl.navigateRoot('/resta-contra'); // Navegar a la página 'home'
  }

 
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model:any){

    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {

      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {

        // Se asigna el campo faltante
        this.field=key;

        // Se retorna false
        return false;
      }
    }
    return true;
  }

  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:3000
      }
    );
    toast.present();
  }
}

