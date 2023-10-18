import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: any;

  constructor(private route: ActivatedRoute) {
    // Recupera el nombre de usuario del parámetro de la URL.
    this.username = this.route.snapshot.paramMap.get('username');
  }
}


