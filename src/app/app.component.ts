import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
// import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,RouterModule],
  template: `
    <main>
    <a [routerLink] = "['/']">
      <header class="brand-name">
        <svg class="brand-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 128 128">
         <path fill="#fff" d="M98.8 60.9L102.6 66.8 98.8 66.8 98.8 111 29.2 111 29.2 67.9 23.8 66.3 29.2 60.9 64 24.8z"></path><path fill="#c7d7e2" d="M40.3 111L40.3 71.8 59.6 71.8 59.6 111M64 17L17.6 64 23.5 69.9 64 27.8 104.5 69.9 110.4 64 98.8 52.3 98.8 24.8 87.2 24.8 87.2 40.5z"></path><path fill="#c7d7e2" d="M48.5,58.2L48.5,58.2c3.1-17.4,27.8-17.4,30.9,0l0,0H48.5z"></path><path fill="#454b54" d="M98.8,114H29.2c-1.7,0-3-1.3-3-3V70.9h-4.7c-0.8,0-1.6-0.3-2.2-0.9l-3.9-3.9c-1.2-1.2-1.2-3,0-4.2 l46.4-47c1.1-1.1,3.1-1.1,4.3,0l18,18.3v-8.4c0-1.7,1.3-3,3-3h11.6c1.7,0,3,1.3,3,3V51l10.7,10.9c1.2,1.2,1.2,3,0,4.2l-3.9,3.9 c-0.6,0.6-1.3,0.9-2.1,0.9l0,0h-4.7V111C101.8,112.7,100.4,114,98.8,114z M32.2,108h63.5V67.9c0-0.8,0.3-1.6,0.9-2.1 c0.6-0.6,1.4-0.9,2.1-0.9h6.5l0.9-0.9l-9.5-9.6c-0.6-0.6-0.9-1.3-0.9-2.1V27.8h-5.6v12.7c0,1.2-0.7,2.3-1.9,2.8 c-1.1,0.5-2.4,0.2-3.3-0.7L64,21.3L21.9,64l0.9,0.9h6.5c0.8,0,1.6,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1L32.2,108L32.2,108z"></path><path fill="#c7d7e2" d="M68.4 71.8H87.7V91.4H68.4z"></path><path fill="#e3f3f7" d="M49.9 77.69999999999999A3.9 3.9 0 1 0 49.9 85.5A3.9 3.9 0 1 0 49.9 77.69999999999999Z"></path>
        </svg>
        <h2> Alpha Home Rentals </h2>
      </header>
    </a>
  
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Houses';
}
