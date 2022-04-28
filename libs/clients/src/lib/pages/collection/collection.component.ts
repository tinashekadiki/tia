import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from "@angular/common/http";
import {Collection, CollectionCity} from "../../models/collection";

@Component({
  selector: 'front-application-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  data: Collection | null;
  collectionPoints: CollectionCity[];
  currentCity: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getCities(0);
  }


  getCities(page: number){
    console.log(page, this.data);
    this.data = null;
    this.http.get<Collection>(`http://192.168.10.91:8089/api/v1/collection-point/all-cities?pageNumber=${page}`).subscribe(
      {
        next: res => this.data = res
      }
    )
  }

  getCollectionPoints(cityId: number){
    this.collectionPoints = [];
    this.currentCity = cityId;
    this.http.get<CollectionCity[]>(`http://192.168.10.91:8089/api/v1/collection-point/${cityId}`).subscribe(
      {
        next: res => this.collectionPoints = res
      }
    )
  }

}
