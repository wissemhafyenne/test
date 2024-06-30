
import { Component, OnInit } from '@angular/core';

// Constant classes
import { Constant } from './../../core/constants/constant';
@Component({
  selector: 'app-back-offcomplexe',

  templateUrl: './back-offcomplexe.component.html',
  styleUrls: ['./back-offcomplexe.component.scss']
})
export class BackOffcomplexeComponent  implements OnInit {
   // Holds header views
   headerView = Constant.HEADER_VIEW;

   // Holds footer views
   footerView = Constant.FOOTER_VIEW;
 
   constructor() { }
 
   ngOnInit(): void {
   }



































}
