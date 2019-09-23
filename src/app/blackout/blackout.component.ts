import { Component, OnInit } from '@angular/core';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blackout',
  templateUrl: './blackout.component.html',
  styleUrls: ['./blackout.component.less']
})
export class BlackoutComponent implements OnInit {
  faAngleDown = faAngleDown;
  constructor() { }

  ngOnInit() {

  }

}
