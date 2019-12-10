import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  selectedTabLink;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log("路径参数", params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.route.queryParamMap.subscribe(params => {
      console.log("查询参数", params);
    });
  }
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://picsum.photos/1200/500?random&t=${Math.random()-1}',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://picsum.photos/1200/500?random&t=${Math.random()+2}',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://picsum.photos/1200/500?random&t=${Math.random()+3}',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://picsum.photos/1200/500?random&t=${Math.random()+4}',
      link: '',
      caption: ''
    },
  ];

  channels: Channel[] = [
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
      title: '全球购',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'world'
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
      title: '省钱月卡',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'money'
    },
    {
      id: 10,
      title: '充值中心',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'center'
    },
    {
      id: 11,
      title: '品牌特卖',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'sport'
    },
    {
      id: 12,
      title: '现金签到',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'check'
    },
    {
      id: 13,
      title: '金猪赚大钱',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'pig'
    },
    {
      id: 14,
      title: '电器城',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'electric'
    },
    {
      id: 15,
      title: '爱逛街',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'street'
    },
    {
      id: 16,
      title: '砍价免费拿',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'free'
    },
    {
      id: 17,
      title: '多多爱消除',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'electric'
    },
    {
      id: 18,
      title: '每日好店',
      icon: 'https://picsum.photos/1200/500?random&t=${Math.random()}',
      link: 'every'
    }
  ];

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.imageSliders);
  }
}
