import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Login';
  isNotHome = true;

  //Model
  user : any = {
    email: '',
    password : ''
  }
  
  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validateModel(this.user)){
      this.router.navigate(['/casa']);
      if(this.user.email == 'admin@admin.cl'){
        this.presentToast('Bienvenido Administrador');
      }
      else{
        this.presentToast('Bienvenido ' + this.user.email);
      }
    }
    else{
      this.presentToast('Debe ingresar sus datos correctamente');
    }
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(this.user.email == 'admin@admin.cl' && this.user.password == '1234' || this.user.email == 'usuario@gmail.com' && this.user.password == '1234'){
        this.field = key;
        return true;
      }
    }
    return false;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }


}
