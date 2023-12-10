import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getHttpUrlObject } from 'src/utility/Service.utility';
import { PropertyResponse } from '../Models/Property.models';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  fetchProperties() {
    const url = environment.apiUrl + 'properties/list';
    console.log(url);
    return this.http.get<PropertyResponse>(url, getHttpUrlObject());
  }

  fetchPropertyById(id: string) {
    const url = environment.apiUrl + 'properties/detail?externalID=' + id;
    return this.http.get<any>(url, getHttpUrlObject());
  }
}
