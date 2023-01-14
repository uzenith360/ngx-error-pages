import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentConfig } from '../environment-config.interface';
import EnvironmentConfigService from '../environment-config.service';
import { ErrorPageData } from '../error-page-data.interface';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public pageData!: ErrorPageData;

  constructor(@Inject(EnvironmentConfigService) private config: EnvironmentConfig) {
    this.pageData = config.notFoundPage || {};
   }

  ngOnInit(): void {
  }

}
