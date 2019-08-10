import { Component, OnInit } from '@angular/core';
import { Constants } from './common/constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public navLinks: any[];
  public activeLinkIndex = -1;
  public isLoading = true;

  constructor() {
    this.navLinks = Constants.navLinks;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
