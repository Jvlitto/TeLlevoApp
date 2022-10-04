import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = "Home";
  isNotHome = false;
  nombre: string = 'Barbara';
  apellido: string = 'Moraga';
  loading : HTMLIonLoadingElement;
  
  constructor(private loadingCtrl: LoadingController) {}
  ngOnInit(): void {
    this.cargarLoading();
  }
    
  cargarLoading(){
    this.presentLoading('Bienvenido a Te Llevo App');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

  await this.loading.present();
    
 }
  
}
