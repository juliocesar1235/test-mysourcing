import { Component, Input, OnInit } from "@angular/core";

import { User } from "../../models/user";
import { GeographyService } from "../../services/geography.service";
import { Observable, of } from "rxjs";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private geoService: GeographyService){}

  @Input() users: User[] = []

  zipcodeInput: string = '';
  zipcodes!: Observable<string[]>;
  model = new User(
    'Julio',
    'Gutierrez',
    'juliog@gmail.com',
    '813108311',
    '0',
    '',
    'Briones'
  );


  submitted = false;

  ngOnInit(): void {
    this.users.push(this.model);
    this.geoService.getZipcodes('664',9).subscribe((response) => {
      this.zipcodes = of(response.response.cp);
    })
  }

  onSubmit() { 
    this.submitted = true;
    console.log(this.model);
  }

  validateZipCode(event: any){
    this.zipcodeInput = event.target.value;
    if(this.zipcodeInput.length > 0){
      this.geoService.getZipcodes(this.zipcodeInput,6).subscribe((response) => {
        this.zipcodes = of(response.response.cp);
      })
    }
  }

  setState(event: any) {
    const zipcodeToReview = event.option?.value ?? '0';
    if (zipcodeToReview) {
      this.geoService.getZipcodeInfo(zipcodeToReview).subscribe((resp) => {
        this.model.state = resp.response.estado;
      })
    }
  }
}

