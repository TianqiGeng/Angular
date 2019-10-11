import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let spaces=0;
    if(args){
      spaces=parseInt(args);
    }
    let reversed=Array(spaces+1).join(' ');
    console.log("reversed::"+reversed);
    return value.split('').reverse().join(reversed);
  }

}
