import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentConfig } from '../environment-config.interface';
import EnvironmentConfigService from '../environment-config.service';
import { ErrorPageData } from '../error-page-data.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
    imports: [RouterLink]
})
export class PageNotFoundComponent implements OnInit {
  public pageData!: ErrorPageData;

  constructor(@Inject(EnvironmentConfigService) private config: EnvironmentConfig) {
    this.pageData = config.notFoundPage || {};
   }

  ngOnInit(): void {
  }

}
