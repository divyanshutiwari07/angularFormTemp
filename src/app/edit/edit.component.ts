import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../common/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editData: any = {};
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  moveToSecondPage() {
    this.router.navigateByUrl('/second-page');
  }

  save() {
    this.apiService.updateEditData(  this.editData ).subscribe((res) => { console.log(res); });

  }

}
