import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle= "Conversor";
  isNotHome= true;

  constructor() { }

  ngOnInit() {
  }

}
