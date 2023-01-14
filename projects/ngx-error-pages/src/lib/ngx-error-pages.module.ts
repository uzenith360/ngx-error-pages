import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnvironmentConfig } from './environment-config.interface';
import EnvironmentConfigService from './environment-config.service';
import { PageErrorComponent } from './page-error/page-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageErrorComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    PageErrorComponent,
    PageNotFoundComponent,
  ]
})

export class NgxErrorPagesModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<NgxErrorPagesModule> {
    return {
      ngModule: NgxErrorPagesModule,
      providers: [
        {
          provide: EnvironmentConfigService,
          useValue: config,
        }
      ],
    }
  }
}
