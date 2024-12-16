import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentConfig } from '../environment-config.interface';
import EnvironmentConfigService from '../environment-config.service';
import { ErrorPageData } from '../error-page-data.interface';

@Component({
    selector: 'app-page-error',
    templateUrl: './page-error.component.html',
    styleUrls: ['./page-error.component.css'],
    standalone: false
})
export class PageErrorComponent implements OnInit {
  public pageData!: ErrorPageData;

  constructor(@Inject(EnvironmentConfigService) private config: EnvironmentConfig) {
    this.pageData = config.errorPage || {};
  }

  ngOnInit(): void {
  }

}
