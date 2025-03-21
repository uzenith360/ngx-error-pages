import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import EnvironmentConfigService from '../environment-config.service';

import { PageErrorComponent } from './page-error.component';

describe('PageErrorComponent', () => {
  let component: PageErrorComponent;
  let fixture: ComponentFixture<PageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterModule, PageErrorComponent],
    providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: EnvironmentConfigService, useValue: {} }
    ]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
