import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../common/service/api.service';

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

  moveToSendEmailPage() {
    this.router.navigateByUrl('/send-email');
  }

  onSubmit() {
    // console.log('vent', this.loginDetails );
    // console.log('went', this.empData);
    this.apiService.getServerData(  this.loginDetails).subscribe((res) => { console.log(res); });
    this.loginDetails = {};
  }
}
