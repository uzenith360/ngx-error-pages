import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentConfig } from '../environment-config.interface';
import EnvironmentConfigService from '../environment-config.service';
import { ErrorPageData } from '../error-page-data.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-error',
    templateUrl: './page-error.component.html',
    styleUrls: ['./page-error.component.css'],
    imports: [RouterLink]
})
export class PageErrorComponent implements OnInit {
  public pageData!: ErrorPageData;

  constructor(@Inject(EnvironmentConfigService) private config: EnvironmentConfig) {
    this.pageData = config.errorPage || {};
  }

  ngOnInit(): void {
  }

}
