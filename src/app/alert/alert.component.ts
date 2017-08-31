import { Component, OnInit } from '@angular/core';
import { AlertService } from "../shared/services/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  successMessage: string;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage()
        .subscribe(msg => {
          this.successMessage = msg;
          setTimeout(() => this.successMessage = '', 5000);
        });
  }

}
