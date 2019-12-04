import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent, { static: true }) imageSlider: ImageSliderComponent;
  title = 'pindd';
  topMenus: TopMenu[] = [{
    title: '热门',
    link: ''
  },
  {
    title: '男装',
    link: ''
  },
  {
    title: '百货',
    link: ''
  },
  {
    title: '运动',
    link: ''
  },
  {
    title: '手机',
    link: ''
  },
  {
    title: '家纺',
    link: ''
  },
  {
    title: '食品',
    link: ''
  },
  {
    title: '电器',
    link: ''
  },
  {
    title: '鞋包',
    link: ''
  },
  {
    title: '汽水',
    link: ''
  },
  {
    title: '水果',
    link: ''
  },
  {
    title: '电脑',
    link: ''
  },
  {
    title: '内衣',
    link: ''
  },
  {
    title: '家装',
    link: ''
  },
  {
    title: '母婴',
    link: ''
  },
  {
    title: '美妆',
    link: ''
  },
  {
    title: '家具',
    link: ''
  },
  ];
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

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.imageSlider);


  }
}
