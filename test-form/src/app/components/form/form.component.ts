import { Component, SimpleChange, SimpleChanges } from "@angular/core";

import { User } from "../../models/user";
import { GeographyService } from "../../services/geography.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private geoService: GeographyService){}

  zipcodeInput: string = '';
  zipcodes: string[] = [];
  model = new User(
    'Julio',
    'Gutierrez',
    'juliog@gmail.com',
    '813108311',
    '0',
    'Nuevo Leon',
    'Briones'
  );

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(this.model);
  }

  validateZipCode(event: any){
    this.zipcodeInput = event.target.value;
    console.log(this.zipcodeInput);
    this.geoService.getZipcodes(this.zipcodeInput,9).subscribe((response) => {
      console.log('response',response)
    })
  }
}

