import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemTitleDirective, GridItemImageDirective, GridItemDirective } from './directives';
import { AgoPipe } from './pipes';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemImageDirective,
    GridItemDirective,
    AgoPipe,

  ],
  imports: [
    CommonModule,
    FormsModule,


  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemImageDirective,
    GridItemDirective,
    AgoPipe,

  ]
})
export class SharedModule { }
