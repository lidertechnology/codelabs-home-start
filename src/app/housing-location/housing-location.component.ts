import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousinLocation } from '../housin-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">

      <img 
      class="listing-photo" 
      [src]="conector.photo" 
      alt="Foto del exterior de {{ conector.name }}" >

     <h2 class="listing-heading">  {{conector.name}} </h2>

     <p class="listing-location"> {{conector.city}}, {{conector.state}} </p>

    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() conector!: HousinLocation;

}
