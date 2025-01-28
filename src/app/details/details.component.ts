import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housinglocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);    // to access route parameters (like id) (i.e extract id from URL)
  housingService = inject(HousingService);         // to use housing data
  housingLocation: HousingLocation | undefined;   // data/object fetched from service based on fetched id 
  applyForm : FormGroup;                         // represents the form itself

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);       // retrieves id from current URL
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);    // fetching location data from service

    this.applyForm = new FormGroup({      // FormGroup is used to group FormControls
      firstName: new FormControl(''),     // FormControl is used for each input fields
      lastName: new FormControl(''),
      email: new FormControl('')
    });
  }
  
  onSubmit(): void {                           // This method is called when the form is submitted
    this.housingService.submitApplication(    // This method sends the form data to housing service for submission
      this.applyForm.value.firstName ?? '',   // give value of form from form fields(keys)  // ?? is nullish coalescing operator to default to null/empty string
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }


}
