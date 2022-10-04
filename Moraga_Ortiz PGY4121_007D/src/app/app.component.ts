import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    { title: 'Inicio', url: 'casa', icon: 'home' },
    { title: 'Nosotros', url: 'about', icon: 'people' },
    { title: 'Contacto', url: 'contact', icon: 'mail' },
    { title: 'Conversor', url: 'conversor', icon: 'archive' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  nombre: string = 'Julio';
  apellido: string = 'Moraga';
  mail: string = 'jul.moraga@duocuc.cl'
  constructor() {
    this.nombre = 'Julio';
    this.apellido = 'Moraga';
    this.mail = 'jul.moraga@duocuc.cl';
  }
}
