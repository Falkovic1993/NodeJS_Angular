import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { User } from './entities/user';

@Pipe({
  name: 'filterusers'

})
@Injectable()
export class FilterusersPipe implements PipeTransform {

  transform(items: User[], args?: string): any {

    if(args && items.length > 0){
      let itemsFound = items.filter(
        item => item.firstname && item.firstname.toLowerCase().includes(args.toLocaleLowerCase())
        || item.lastname && item.lastname.toLowerCase().includes(args.toLowerCase())
        || item.email && item.email.toLowerCase().includes(args.toLowerCase())
      );
      
      if(itemsFound && itemsFound.length > 0){
        return itemsFound
      } else {
        return [-1]; // to display error message (none found) in view.
      }
    }
    return items;
  }

}
