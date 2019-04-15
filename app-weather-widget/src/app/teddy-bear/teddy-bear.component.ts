import { Component, OnInit, Input } from '@angular/core';
import { IsocialInfo, Iinfo } from '../mock/info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  public socialInfo: IsocialInfo = {
    title: '-',
    img: 'assets/images/b1.jpg',
    followers: 0,
    following: 0
  };

  constructor( private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getInfo().subscribe((v: Iinfo) => {
      this.socialInfo = v.social_info;
    });
  }

}
