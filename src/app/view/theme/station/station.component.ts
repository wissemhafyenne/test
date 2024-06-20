// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { RadioService } from './../../../core/services/api/radio.service';

// Constant classes
import { HttpStatus } from './../../../core/constants/http-status';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html'
})
export class StationComponent implements OnInit {

  // Holds station data
  stations: any = [];

  constructor(
    private radioService: RadioService
  ) { }

  ngOnInit(): void {
    this.getStations();
  }

  /**
   * Get radio station data from default json.
   */
  getStations(): void {
    this.radioService.getRadios().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.stations = response.data;
      }
    });
  }

}
