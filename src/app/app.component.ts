import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { materialModules } from './shared/utils/material/material-module';
import { HeaderComponent } from './shared/ui/header/header.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ...materialModules,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-tcc-angular';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  sidenavOpen() {
    this.sidenav.open();
  }
}
