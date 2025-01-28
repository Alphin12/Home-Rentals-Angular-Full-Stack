import { Component,inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; 
import { HousingLocation } from '../housinglocation';  // imports the interface // housinglocation.ts file(outside components) which contains the interface definition.
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // housingLocation: HousingLocation = {   // This declares that housingLocation property or object follows the HousingLocation interface imported here.
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600' ,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
  housingLocationList: HousingLocation[] = [];
  housingService : HousingService = inject(HousingService);  // we need to inject HousingService to call the services methods.
  filteredLocationList : HousingLocation[] = [];
  constructor() {    
    this.housingLocationList = this.housingService.getAllHousingLocations();
    // for search feature
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {    // this fn uses the String filter function to compare the value of the text parameter against the housingLocation.city property
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
  
