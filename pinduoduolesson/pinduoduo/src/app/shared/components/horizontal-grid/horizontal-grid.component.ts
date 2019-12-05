import { Component, OnInit, Input } from '@angular/core';
export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  username = '';
  @Input() channels: Channel[] = [
    {
      id: 1,
      title: '限时秒杀',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'hot'
    },
    {
      id: 2,
      title: '断码清仓',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'men'
    },
    {
      id: 3,
      title: '品牌馆',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'sports'
    },
    {
      id: 4,
      title: '多多果园',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'department'
    },
    {
      id: 5,
      title: '9块9特卖',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'food'
    },
    {
      id: 6,
      title: '助力享免单',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'textile'
    },
    {
      id: 7,
      title: '天天领现金',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'mobile'
    },
    {
      id: 8,
      title: '1分抽大奖',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'appliance'
    },
    {
      id: 9,
      title: '充值中心',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'money'
    },
    {
      id: 8,
      title: '每日好店',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'store'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
