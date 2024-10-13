import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template:
   `
    <h1>{{housingLocationId}}</h1>
    <h2>{{detailLocation.name}}</h2>

  `,
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute)

  housingServicee = inject(HousingService)

  detailLocation!: HousingLocation;

  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
