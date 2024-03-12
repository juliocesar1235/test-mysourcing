import { Component, Input } from "@angular/core";

import { User } from "../../models/user";


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor(){}

  @Input() user!: User;

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

}

