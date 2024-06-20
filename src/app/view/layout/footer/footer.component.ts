// Angular
import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

// Constant classes
import { Constant } from './../../../core/constants/constant';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, AfterViewInit {

  // Input for footer views
  @Input() footerView: any;

  // Footer template views
  @ViewChild('landingFooter') landingFooter: TemplateRef<any> | undefined;
  @ViewChild('appFooter') appFooter: TemplateRef<any> | undefined;

  footerTemplate: TemplateRef<any> | undefined;

  // Holds brand object
  brand = Constant.BRAND;

  // Holds mobile app data
  app = Constant.APP;

  // Holds social links
  social = Constant.social;

  // Holds current year
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setHeaderView();
    }, 0);
  }

  /**
   * Set header view according parent input.
   */
  setHeaderView(): void {
    switch (this.footerView) {
      case Constant?.FOOTER_VIEW?.landing:
        this.footerTemplate = this.landingFooter;
        break;
      case Constant?.FOOTER_VIEW?.app:
        this.footerTemplate = this.appFooter;
        break;
      default:
        this.footerTemplate = this.landingFooter;
        break;
    }
  }

  /**
   * Set app button inner HTML
   * @param obj 
   * @returns {string}
   */
  appButtonHTML(obj: any): string {
    return obj.icon + '<span class="ms-2">' + obj.name + '</span>';
  }

}
