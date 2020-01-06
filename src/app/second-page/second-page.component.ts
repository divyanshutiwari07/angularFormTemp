import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  public empRecord;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getSavedData().subscribe((res) => {
      this.empRecord = res,
      console.log( 'empREcord', this.empRecord);
      });
  }
  moveToHomePage(){
    this.router.navigateByUrl('/first-page');
  }
  deleteUser(event) {
    console.log(event.id);
    this.apiService.deleteUser({'id': event.id}).subscribe((res) => {
      console.log('delete', res);
      this.empRecord = res;
    });
  }

}
