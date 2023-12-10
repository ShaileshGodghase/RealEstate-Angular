import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyInfo } from 'src/app/Models/Property.models';
import { PropertyService } from 'src/app/service/Property.service';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css'],
})
export class PropertyInfoComponent implements OnInit {
  propertyInfo: any | undefined;
  loading: boolean = true;

  @Input() url: string = '';
  constructor(
    private property: PropertyService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.property.fetchPropertyById(id as string).subscribe((data) => {
        this.propertyInfo = data;
        this.loading = false;
      });
    });
  }
}
