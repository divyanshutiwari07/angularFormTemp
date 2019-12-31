import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/service/api.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  public empRecord;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSavedData().subscribe((res) => {
      this.empRecord = res,
      console.log( 'empREcord', this.empRecord);
      });
  }

}
