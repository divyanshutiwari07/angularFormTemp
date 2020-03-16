import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  public emailDetails: any = {};

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log('vent', this.loginDetails );
    console.log('email details', this.emailDetails);
    this.apiService.sendEmail( this.emailDetails).subscribe((res) => { console.log(res); });
    this.emailDetails = {};
  }

  goToHomePage() {
    this.router.navigateByUrl('/first-page');
  }

}
