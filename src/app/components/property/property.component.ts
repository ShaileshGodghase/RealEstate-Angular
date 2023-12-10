import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/Property.models';
import { PropertyService } from 'src/app/service/Property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  propertyInfo: Property[] = [];
  loading: boolean = true;
  constructor(private property: PropertyService) {}

  ngOnInit(): void {
    this.property.fetchProperties().subscribe((data) => {
      this.propertyInfo = data.hits;
      this.loading = false;
    });
  }
}
