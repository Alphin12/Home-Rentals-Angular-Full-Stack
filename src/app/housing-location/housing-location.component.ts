import { Component, Input} from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation; // created a new property with @Input(). we also used non-null assertion operator (!) i.e input is expecting the value to be passed
  // Note that in above value of property(housingLocation) is sent from parent(Home component) to child (housing-location component).
}
