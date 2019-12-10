import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenu, ImageSliderComponent, Channel, ImageSlider } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @ViewChild(ImageSliderComponent, { static: true }) imageSlider: ImageSliderComponent;
  title = 'pindd';
  topMenus: TopMenu[] = [{
    id: 1,
    title: '热门',
    link: 'hot',
  },
  {
    id: 2,
    title: '男装',
    link: 'men'
  },
  {
    id: 3,
    title: '百货',
    link: 'shop'
  },
  {
    id: 4,
    title: '运动',
    link: 'sport'
  },
  {
    id: 5,
    title: '手机',
    link: 'phone'
  },
  {
    id: 6,
    title: '家纺',
    link: 'bed'
  },
  {
    id: 7,
    title: '食品',
    link: 'food'
  },
  {
    id: 8,
    title: '电器',
    link: 'electric'
  },
  {
    id: 9,
    title: '鞋包',
    link: 'shoes'
  },
  {
    id: 10,
    title: '汽水',
    link: 'drink'
  },
  {
    id: 11,
    title: '水果',
    link: 'fruit'
  },
  {
    id: 12,
    title: '电脑',
    link: 'computer'
  },
  {
    id: 13,
    title: '内衣',
    link: 'underwear'
  },
  {
    id: 14,
    title: '家装',
    link: 'decoration'
  },
  {
    id: 15,
    title: '母婴',
    link: 'mother'
  },
  {
    id: 16,
    title: '美妆',
    link: 'makeup'
  },
  {
    id: 17,
    title: '家具',
    link: 'furniture'
  },
  ];
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
