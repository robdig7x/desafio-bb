import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IndicatorService } from '../indicator.service';
import { Indicator } from '../indicator';

@Component({
  selector: 'app-indicator-list',
  templateUrl: './indicator-list.component.html',
  styleUrls: ['./indicator-list.component.css']
})
export class IndicatorListComponent implements OnInit {
  indicators: Indicator[] = [];
  indicatorSearch: Indicator = new Indicator();
  indicatorSelected: Indicator = new Indicator();
  searchText: any;
  submitted = false;
  displayStyle = "none";

  names = [
    { id: 1, name: 'Brasil' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Mike' },
    { id: 4, name: 'Adam' }
  ];

  constructor(private indicatorService: IndicatorService, private route: Router) { }

  ngOnInit(): void {
    this.indicatorSearch = new Indicator();
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.reloadData(this.indicatorSearch.country.id);  
  }

  reloadData(code: string) {

    this.indicatorService.getIndicatorList(code).subscribe(data => {
      this.indicators = data[1];
      console.log(data);
    });
  }

  indicatorDetails(code: string, date: string) {
    this.route.navigate(['details', code, date]);
  }

  openModal(indicatorSelected: Indicator) {
    this.displayStyle = "block";
    console.log(indicatorSelected);
    this.indicatorSelected = indicatorSelected;
  }
  closePopup() {
    this.displayStyle = "none";
    this.indicatorSelected = new Indicator();
  }
  
}
