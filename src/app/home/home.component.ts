import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `

    <section>
      <form>
        <input type="text" placeholder="Filter for city">
        <button class="primary" type="button">Seach</button>
      </form>
    </section>


    <section class="results">

    @for (item of items; track $index) {
      <app-housing-location [conector]="item" ></app-housing-location>  
    }  
    

    </section>
    
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Creamos una variable de tipo interface creada que es un array de propiedades.

  items: HousingLocation[] = [];


  //Creamos una variable o propiedad de tipo servicio creado que sera igual a un inject de parametro HousingService.
  housingService = inject(HousingService)

  constructor() {
    this.items = this.housingService.getAllHousingLocation();
  }

}
