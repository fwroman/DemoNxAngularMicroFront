import { Component, Input, OnInit } from '@angular/core';
import { NavMenu } from '../../interfaces/nav-menu';

@Component({
  selector: 'angular12-micro-frontend-nx-workspace-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() navList: NavMenu[];

  constructor() {
    this.navList = [
      { name: 'Inicio', route: '' },
      { name: 'Administrador', route: '' },
      { name: 'Perfiles', route: '' },
    ]
  }

  ngOnInit(): void {
  }

}
