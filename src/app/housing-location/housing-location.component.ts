import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    DetailComponent,  //Importamos el componente de detalle
    RouterModule //Importamos RouterModule
  ],
  template: `
    <section class="listing">
      <img 
      class="listing-photo" 
      [src]="conector.photo" 
      alt="Foto del exterior de {{ conector.name }}" >
     <h2 class="listing-heading">  {{conector.name}} </h2>
     <p class="listing-location"> {{conector.city}}, {{conector.state}} </p>
     
     <a [routerLink]="['/detail', conector.id]"> Learn More</a>

    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  
  @Input() conector!: HousingLocation;

}
