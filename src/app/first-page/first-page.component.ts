import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../common/service/api.service';
import { format } from 'url';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  loginDetails: any = {};
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  moveToSecondPage() {
    this.router.navigateByUrl('/second-page');
  }
  onSubmit(event) {
    console.log('vent', this.loginDetails );
    this.apiService.getServerData(  this.loginDetails).subscribe((res) => { console.log(res); });
    this.loginDetails = {};
  }
}
